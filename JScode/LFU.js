/* 定义节点 */
class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.freq = 1   	// 访问频次
        this.pre = null
        this.post = null
    }
}

/* 双向链 表*/
class DualLinkedList {
    constructor(node) {
        this.head = new Node()
        this.tail = new Node()
        this.head.post = this.tail
        this.tail.pre = this.head
    }

    /* 移除 */
    remove(node) {
        node.pre.post = node.post
        node.post.pre = node.pre
    }

    /* 插入节点（head之后） */
    add(node) {
        node.post = this.head.post
        this.head.post.pre = node
        node.pre = this.head
        this.head.post = node
    }

    /* 判空 */
    isEmpty() {
        return this.head.post === this.tail && this.tail.pre === this.head
    }
}

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.minFreq = 0  				// 最小使用频率，删除使用
        this.size = 0     				// 当前已使用的容量
        this.freqMap = new Map()  // freq-DualLinkedList
        this.cacheMap = new Map() // key-node
    }

    // 频率+1，freqMap的旧频率的key中移除，添加到新的freq链表中
    increaseFreq(node) {
        let list = this.freqMap.get(node.freq)
        list.remove(node)
        // 同步更新最新频率标记（如果当前是最小频率节点）
        if (list.isEmpty() && node.freq === this.minFreq) {
            this.minFreq += 1
        }
        node.freq += 1
        let newList = this.freqMap.get(node.freq)
        if (newList === undefined) {
            newList = new DualLinkedList()
        }
        newList.add(node)	// 最新频率索引对应的双向链表中增加该节点
        this.freqMap.set(node.freq, newList)
    }

    /* 获取节点 value */
    get(key) {
        let node = this.cacheMap.get(key)
        if (node === undefined) {
            // 不存在，返回 -1
            return -1
        }
        // 存在，返回当前节点值；同时访问频次 +1
        this.increaseFreq(node)
        return node.value
    }

    /* 增加节点 */
    put(key, value) {
        if (this.capacity === 0) return
        // 如果key已存在，则变更其值，增加访问频率
        if (this.cacheMap.has(key)) {
            let node = this.cacheMap.get(key)
            node.value = value
            this.cacheMap.set(key, node)
            this.increaseFreq(node)
            return
        }
        // 容量达到上限
        if (this.size === this.capacity) {
            // 获取最小频率队列（通过minFreq标记）
            let miniFreqList = this.freqMap.get(this.minFreq)
            // 获取最小频次队列的队尾（最小且最久）
            let miniFreqNode = miniFreqList.tail.pre
            // 淘汰该节点
            miniFreqList.remove(miniFreqNode)
            this.freqMap.set(this.minFreq, miniFreqList)
            this.cacheMap.delete(miniFreqNode.key)
        }

        // 插入新节点
        let node = new Node(key, value)
        this.cacheMap.set(key, node)
        // freq为1的链表中，插入节点
        let list = this.freqMap.get(1)
        if (list === undefined) {
            list = new DualLinkedList()
        }
        list.add(node)

        this.freqMap.set(1, list)
        this.minFreq = 1
        if (this.size < this.capacity) {
            this.size += 1
        }
        return
    }
}

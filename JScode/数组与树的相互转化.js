const arr = [
    { id: 2, title: '中国', parent_id: 0 },
    { id: 3, title: '广东省', parent_id: 2 },
    { id: 4, title: '广州市', parent_id: 3 },
    { id: 5, title: '天河区', parent_id: 4 },
    { id: 6, title: '湖南省', parent_id: 2 },
    { id: 1, title: '俄罗斯', parent_id: 0 }
]
const arrresult = [
    {
        id: 2, title: '中国', parent_id: 0,
        children: [
            {
                id: 3, title: '广东省', parent_id: 2,
                children: [
                    {
                        id: 4, title: '广州市', parent_id: 3,
                        children: [
                            { id: 5, title: '天河区', parent_id: 4 }
                        ]
                    }
                ]
            }, { id: 6, title: '湖南省', parent_id: 2 }
        ]
    },
    {

        id: 1, title: '俄罗斯', parent_id: 0,
        children: []
    }
]

/** 树状形结构数据treeData */
const treeData = [
    {
        id: 2, title: '中国', parent_id: 0,
        children: [
            {
                id: 3, title: '广东省', parent_id: 2,
                children: [
                    {
                        id: 4, title: '广州市', parent_id: 3,
                        children: [
                            { id: 5, title: '天河区', parent_id: 4 }
                        ]
                    }
                ]
            },
            { id: 6, title: '湖南省', parent_id: 2 }
        ]
    },
    { id: 1, title: '俄罗斯', parent_id: 0, },
]


function arrayToTree(data, pid) {
    let result = []
    function getChildren(data, result, pid) {
        for (const item of data) {
            if (item.parent_id === pid) {
                const newItem = { ...item, children: [] }
                result.push(newItem)
                getChildren(data, newItem.children, item.id)
            }
        }
    }

    getChildren(data, result, pid)
    return result;
}

console.log(arrayToTree(arr, 0))
function treeToList(data) {
    let res = [];
    const dfs = (tree) => {
        tree.forEach((item) => {
            if (item.children) {
                dfs(item.children);
                delete item.children;
            }
            res.push(item);
        });
    };
    dfs(data);
    return res;
}

console.log(treeToList(treeData))
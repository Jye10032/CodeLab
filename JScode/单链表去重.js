function ListNode(val) {
    this.val = val;
    this.next = null;
}

function deleteDuplicates(head) {
    let cur = head;
    while (cur && cur.next) {
        if (cur.val === cur.next.val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
}

function createList(arr) {
    let head = new ListNode(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}

createList([1, 1, 2, 3, 3, 4, 5, 5]);
// ListNode {1->1->2->3->3->4->5->5->null}
printList(createList([1, 1, 2, 3, 3, 4, 5, 5]));
printList(deleteDuplicates(createList([1, 1, 2, 3, 3, 4, 5, 5])));

function printList(head) {
    let cur = head;
    while (cur) {
        console.log(cur.val);
        cur = cur.next;
    }
}



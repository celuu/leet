/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

  function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode(null)
    let tail = head;
    let current1 = list1;
    let current2 = list2;
    while(current1 !== null && current2 !== null) {
        if (current1.val > current2.val) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
    }
    if(!current1){
        tail.next = current2;
    }
    if(!current2) {
        tail.next = current1;
    }
    return head.next
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list0, list1, list2) {
   console.log(list0, list1, list2);
  
};

ListNode = function(val = 0, next = null) {
    this.val = val;
    this.next = next;
};

const list0 = new ListNode(undefined, 1);
const list1 = new ListNode(1, 2);
const list2 = new ListNode(2, null);


mergeTwoLists(list0, list1, list2);


/*
Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. 
Return the linked list sorted as well.

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Input: head = [1,1,1,2,3]
Output: [2,3]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
        * *
   [1,2,3,3,4,4,5]
 */
   const deleteDuplicates = function(head) {
    if (!head || !head.next) return head
    
    const prevNode = new ListNode(0, head)
    let prev = prevNode;
    let curr = head;
    
    while (curr?.next) {
        if (curr.val === curr.next.val) {
            while (curr.next && curr.val === curr.next.val) {
                curr = curr.next
            }
            curr = curr.next
            prev.next = curr
        } else {
            prev = curr
            curr = curr.next
        }
    }
    
    return prevNode.next
}
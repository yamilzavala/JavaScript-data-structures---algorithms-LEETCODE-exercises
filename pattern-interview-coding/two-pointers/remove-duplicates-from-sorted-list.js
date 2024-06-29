/*
Remove Duplicates from Sorted List

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

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
 [1,2,2]   1->2->2 
    * *  
 [1,2,3]   1->2->3
   * *
 [1,2,3,3] 1->2->3->3  
 */
 var deleteDuplicates = function(head) {
    //empty list
    if(head == null) return null;

    let current = head;
    let nextCurrent = head.next;

    while(current.next !== null) {        
        if(current.val === nextCurrent.val){
            //change pointers 
            nextCurrent = nextCurrent.next;
            //delete duplicates
            current.next = nextCurrent;
        } else {
            //change references to next nodes
            current = nextCurrent; 
            nextCurrent = nextCurrent.next;   
        }
    }
    return head;
};

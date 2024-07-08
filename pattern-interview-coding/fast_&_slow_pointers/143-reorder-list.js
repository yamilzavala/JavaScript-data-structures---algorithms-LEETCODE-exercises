/*
143. Reorder List

You are given the head of a singly linked-list. The list can be represented as:
L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

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
 * @return {void} Do not return anything, modify head in-place instead.

 L0    L1   L2   L3
 1  →  2  → 3  → 4
 
 Ln-3   Ln-2   Ln-1   Ln
 1  →   2  →   3    → 4

 L0 →      L1 →          L2 →          L3
      Ln →      Ln-1 →          Ln-2 →    Ln-3 →…

(reverse)
p     c   n
null  4 → 5 → null
      p   c   n
null  4 → 5 → null
          p   c    n
null  4 → 5 → null null

(combine)
 h1     n
 1   →  2 →  3 → null
 h2                         1 → 5
 5   →  4 →  null

        h2
 1   →  2 →  3 → null
 h1     n                   1 → 5 → 2
 5   →  4 →  null

        h1   n
 1   →  2 →  3 → null
        h2                  1 → 5 → 2 → 4
 5   →  4 →  null

             h2
 1   →  2 →  3 → null
        h1    n             1 → 5 → 2 → 4 → 3 → null
 5   →  4 →  null

 */
 var reorderList = function(head) {
    let slow = head;
    let fast = head;

    //find middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //break linked list
    let curr = slow.next;
    slow.next = null;

    //reverse second list
    let prev = null;
    while(curr) {
        let nextRef = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextRef;
    }

    //combine lists
    let h1 = head;
    let h2 = prev;
    while(h2) {
        let nextRef = h1.next;
        h1.next = h2;
        h1 = h2;
        h2 = nextRef;
    }
    
};
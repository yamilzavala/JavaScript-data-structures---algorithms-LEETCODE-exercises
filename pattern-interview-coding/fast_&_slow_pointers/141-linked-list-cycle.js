/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}

The hasLoop() function is used to detect if a linked list contains a loop (cycle) or not.
It also utilizes the "tortoise and hare" algorithm.

Here's a step-by-step explanation of the logic:
Initialize two pointers, slow and fast, both pointing to the head of the linked list.

Traverse the linked list using a while loop. The loop continues as long as fast is not null (i.e., it has not reached the end of the list), and fast.next is also not null (i.e., there is at least one more node after the current fast node).

Inside the loop, move the slow pointer one step forward (i.e., slow = slow.next) and the fast pointer two steps forward (i.e., fast = fast.next.next).

Check if the slow and fast pointers have become equal. If they have, it means there is a loop in the linked list, and the function returns true.

If the loop terminates without the slow and fast pointers becoming equal, it means the linked list has no loop, and the function returns false.

The "tortoise and hare" algorithm works by having two pointers move at different speeds through the linked list. If there is a loop, the faster pointer (the hare) will eventually catch up to the slower pointer (the tortoise) inside the loop. If there is no loop, the faster pointer will reach the end of the list.

Code with inline comments:
// Define 'hasLoop' to check for cycles in linked list
hasLoop() {
    // Initialize 'slow' and 'fast' pointers at the head node
    // 'slow' will move 1 step at a time
    // 'fast' will move 2 steps at a time
    let slow = this.head;
    let fast = this.head;
 
    // Continue loop if 'fast' pointer and 'fast.next'
    // are not null. This also prevents errors
    while (fast !== null && fast.next !== null) {
        // Move 'slow' 1 step forward in the list
        slow = slow.next;
 
        // Move 'fast' 2 steps forward in the list
        fast = fast.next.next;
 
        // Check if 'slow' and 'fast' pointers meet
        if (slow === fast) {
            // If they meet, it confirms a loop
            // Return true to indicate a loop
            return true;
        }
    }
 
    // If loop ends without meeting of pointers,
    // it confirms absence of loop in the list
    return false;
}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;
    }
    return false;    
};
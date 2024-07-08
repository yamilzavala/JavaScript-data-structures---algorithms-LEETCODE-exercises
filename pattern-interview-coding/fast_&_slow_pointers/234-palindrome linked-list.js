/*
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome  or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true

Example 2:
Input: head = [1,2]
Output: false
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
 * @return {boolean}

(get the middle)
FS
1 -> 2 -> 2 -> 1 -> null
     S    F
1 -> 2 -> 2 -> 1 -> null
          S          F
1 -> 2 -> 2 -> 1 -> null => we got the middle => S pointer = 2

(inverse from middle)
p = prev
r = root
n = next

p       r    n 
null    2 -> 1 -> null
        p    r    n 
null <- 2    1 -> null
             p    r    n 
null <- 2 <- 1    null

(compare list)
f
1 -> 2 -> 2 -> 1 -> null
s                           f.value(1) === s.value(1)
1 -> 2 -> null

     f
1 -> 2 -> 2 -> 1 -> null
     s                      f.value(2) === s.value(2)
1 -> 2 -> null
 */

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;

    //get middle node
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    fast = head;
    //reverse second slice
    slow = reverse(slow)
    
    //compare two lists
    while(slow) {
        if(slow.val !== fast.val) {
            return false
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;   
};

//helper 
function reverse(root) {
    let prev = null;
    while(root) {
        let nextRef = root.next;
        root.next = prev;
        prev = root;
        root = nextRef;
    }
    return prev;
}
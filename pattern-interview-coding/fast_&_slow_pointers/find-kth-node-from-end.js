/*
LL: Find Kth Node From End ( ** Interview Question)
Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.

Note: this LinkedList implementation does not have a length member variable.

Output:
Return the kth node from the end of the linked list.
If the value of k is greater than or equal to the number of nodes in the list, return null.



Constraints:
You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.

Example 1:
Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findKthFromEnd(2) function:
let kthNode = list.findKthFromEnd(2);
The kthNode should have the value 4.

Example 2:
Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findKthFromEnd(4) function:
let kthNode = list.findKthFromEnd(4);
The kthNode should have the value 3.

The findKthFromEnd(k) function is used to find the kth node from the end of a linked list. It uses two pointers to traverse the list.

Here's a step-by-step explanation of the logic:
Initialize two pointers, slow and fast, both pointing to the head of the linked list.

Move the fast pointer k steps forward in the list using a for loop. If fast becomes null before reaching k steps, it means the linked list has fewer than k nodes, and the function returns null.

Traverse the linked list using a while loop. The loop continues as long as the fast pointer is not null (i.e., it has not reached the end of the list).

Inside the loop, move both the slow and fast pointers one step forward (i.e., slow = slow.next and fast = fast.next).

When the loop terminates, the fast pointer has reached the end of the list. Since the fast pointer started k steps ahead of the slow pointer, the slow pointer now points to the kth node from the end of the list.

Return the slow pointer, which now points to the kth node from the end of the list.

The two-pointer technique used in this function ensures that the linked list is traversed only once, making the algorithm efficient with a time complexity of O(n), where n is the number of nodes in the list.

Code with inline comments:

findKthFromEnd(k) {
    // Initialize slow and fast pointers at head
    let slow = this.head;
    let fast = this.head;
 
    // Move fast pointer k steps ahead
    for (let i = 0; i < k; ++i) {
        // If fast reaches null, k is out of range
        if (fast === null) {
            return null;
        }
        fast = fast.next;
    }
 
    // Iterate until fast reaches the end
    while (fast !== null) {
        // Move slow and fast pointers one step
        slow = slow.next;
        fast = fast.next;
    }
 
    // When fast reaches end, slow is at kth from end
    return slow;
}
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    //fn(x) = size - k + 1
    findKthFromEnd(k) {
        let slow = this.head;
        let fast = this.head;
 
        for (let i = 0; i < k; i++) {
            if (fast === null) {
                return null;
            }
            fast = fast.next;
        }
 
        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }
 
        return slow;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
    console.log(kthNodeFromEnd.value);
} else {
    console.log("Not found");
}


/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    2th node from the end:
    4
*/

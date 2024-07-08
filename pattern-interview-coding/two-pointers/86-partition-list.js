/*
86. Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]

The partitionList(x) function is used to rearrange a linked list in such a way that all nodes with values less than x come before nodes with values greater than or equal to x.

Here's a step-by-step explanation of the logic:
1) If the head of the linked list is null, return, as there is nothing to rearrange.

2) Create two dummy nodes, dummy1 and dummy2. These dummy nodes will be used to build two separate linked lists: one for nodes with values less than x and the other for nodes with values greater than or equal to x.

3) Initialize two pointers, prev1 and prev2, pointing to dummy1 and dummy2, respectively. These pointers will be used to append nodes to the two separate linked lists.

4) Initialize a current pointer pointing to the head of the linked list.

5) Iterate through the linked list using a while loop that continues as long as current is not null: a. If the current node's value is less than x, update prev1.next to point to the current node and move prev1 forward. b. If the current node's value is greater than or equal to x, update prev2.next to point to the current node and move prev2 forward. c. Move the current pointer to the next node.

6) After the loop, set prev2.next to null to terminate the second linked list.

7) Connect the two separate linked lists by setting prev1.next to dummy2.next.

8) Update the head of the linked list to point to the next node of dummy1.

The function has a time complexity of O(n), where n is the number of nodes in the list, as it traverses the list only once.
*/

var partition = function(head, x) {
    // If the list is empty, do nothing
   if(head === null && x === 0) return [];
   
   // Create dummy nodes for two sublists
   let dummy1 = new ListNode(0)
   let dummy2 = new ListNode(0)
   // Initialize prev pointers for sublists
   let prev1 = dummy1;        
   let prev2 = dummy2;
   // Initialize current pointer at head    
   let current = head;

   // Iterate through the list    
   while(current !== null){
       // If current value is less than x
       if(current.val < x) {
           // Add current node to the first sublist
           prev1.next = current;
           prev1 = current;
       } else {
           // Add current node to the second sublist
           prev2.next = current;
           prev2 = current;
       }
       // Move current pointer to the next node
       current = current.next;
   }

   // Terminate the second sublist    
   prev2.next = null;
   // Merge the sublists
   prev1.next = dummy2.next;      
   // Update the head of the list  
   head = dummy1.next;

   return head
};
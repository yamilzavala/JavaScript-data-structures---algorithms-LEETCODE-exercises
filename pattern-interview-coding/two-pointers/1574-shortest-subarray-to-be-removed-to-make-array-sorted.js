/*
1574. Shortest Subarray to be Removed to Make Array Sorted
Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing.

Return the length of the shortest subarray to remove.

A subarray is a contiguous subsequence of the array.

 

Example 1:
Input: arr = [1,2,3,10,4,2,3,5]
Output: 3
Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.
Another correct solution is to remove the subarray [3,10,4].

Example 2:
Input: arr = [5,4,3,2,1]
Output: 4
Explanation: Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].

Example 3:
Input: arr = [1,2,3]
Output: 0
Explanation: The array is already non-decreasing. We do not need to remove any elements.


*/

/**
 * @param {number[]} arr
 * @return {number}        
arr = [1,2,3,10,4,2,3,5]
arr[right] >= arr[right - 1] => condition to find the right pointer where the arr is still in increasing order
arr[left]  <  arr[left - 1]  => condition to find the left pointer where the arr is still in increasing order

//while iteration from right to left to find the position where the array stop to be in asc order
                    R1 R 
[1, 2, 3, 10, 4, 2, 3, 5] => // arr[right] >= arr[right - 1] => 5 > 3 => true => right--; right = index 6
                 R1 R 
[1, 2, 3, 10, 4, 2, 3, 5] => // arr[right] >= arr[right - 1] => 3 > 2 => true => right--; => right = index 5
              R1 R 
[1, 2, 3, 10, 4, 2, 3, 5] => // arr[right] >= arr[right - 1] => 2 > 4 => false => right = index 5

                 *******   
[1, 2, 3, 10, 4, 2, 3, 5] => result = right
 *****************
 
 if right arrive to 0 index, that's means that the array is in increasing order, so we don't need to remove nothing

for and while iteration from left to rigth to find the position where the array stop to be in increasing order
 L1 L            R
[1, 2, 3, 10, 4, 2, 3, 5] 
if (arr[index + 1] < arr[index]) break; // arr[1] < arr[0] => 2 < 1 => false
while (arr[index] > arr[right]) right += 1; // arr[0] > arr[5] => 1 > 2 => false
result = Math.min(result, right - index - 1); // Math.min(5, 5 - 0 - 1) = 4

    L1 L         R
[1, 2, 3, 10, 4, 2, 3, 5] 
if (arr[index + 1] < arr[index]) break; // arr[2] < arr[1] => 3 < 2 => false
while (arr[index] > arr[right]) right += 1; // arr[1] > arr[5] => 2 > 2 => false
result = Math.min(result, right - index - 1); // Math.min(4, 5 - 1 - 1) = 3

       L1 L      R
[1, 2, 3, 10, 4, 2, 3, 5] 
if (arr[index + 1] < arr[index]) break; // arr[3] < arr[2] => 10 < 3 => false
while (arr[index] > arr[right]) right += 1; // arr[2] > arr[5] => 3 > 2 => true
right += 1; // right = 6
result = Math.min(result, right - index - 1); // Math.min(3, 6 - 2 - 1) = 3

          L1 L      R
[1, 2, 3, 10, 4, 2, 3, 5] 
if (arr[index + 1] < arr[index]) break; // arr[4] < arr[3] => 4 < 10 => true, break
 */



var findLengthOfShortestSubarray = function(arr) {
    const size = arr.length;
    let right = size - 1;
    let result = 0;

    //while iteration from right to left to find the position where the array stop to be in asc order
    while(right >= 0 && (arr[right] >= arr[right - 1])) right--;
    result = right;

    //array has asc order
    if(right === 0) return 0;
    
   //for and while iteration from left to rigth to find the position where the array stop to be in asc order
   for(let left = 0; left < size; left++ ) {
    if(left > 0 && arr[left] < arr[left - 1]) break;
    //find the position where left <= right to ensure to have an array with increasing order
    while(right < size && arr[left] > arr[right]) right++;
    result = Math.min(result, right - left - 1)
   }

   return result;
};
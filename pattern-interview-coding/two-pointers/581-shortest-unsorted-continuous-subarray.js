/*
581. Shortest Unsorted Continuous Subarray

Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.

Return the shortest such subarray and output its length.

 

Example 1:
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Example 2:
Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
 

Constraints:
1 <= nums.length <= 104
-105 <= nums[i] <= 105

*/

/**
 * @param {number[]} nums
 * @return {number}
     
 original = [2,6,4,8,10,9,15]
 sorted   = [2,4,6,8,9,10,15]
  L             R   
 [2,6,4,8,10,9,15]
  L             R
 [2,4,6,8,9,10,15]
 ------------------
    L        R   
 [2,6,4,8,10,9,15]
    L        R      => start = 1; end = 5    
 [2,4,6,8,9,10,15] 
 */
 var findUnsortedSubarray = function(nums) {
    if(nums.length <= 1 ) return 0;

    const sortedArr = nums.slice().sort((a,b)=>a-b);
    let start = 0;
    let end = nums.length - 1;
    let left = 0;
    let right = nums.length - 1;
    let findStart = false;
    let findEnd = false;

    while(left < nums.length - 1) {       
        if(nums[left] !== sortedArr[left]) {
            start = left;
            findStart = true;
            break;
        }
        left++;
    }

    if(start >= nums.length - 1) return 0;

    while(right > 0) {       
        if(nums[right] !== sortedArr[right]) {
            end = right;
            findEnd = true;
            break;
        }
        right--;
    }

    if(findStart && findEnd) return end - (start - 1)

    return 0
};
/*
209. Minimum Size Subarray Sum
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 target = 7, nums = [2,3,1,2,4,3]
 l = left

  il
 [2, 3, 1, 2, 4, 3] => sum = 2; 
  l  i
 [2, 3, 1, 2, 4, 3] => sum = 5; 
  l     i
 [2, 3, 1, 2, 4, 3] => sum = 6; 
  l        i
 [2, 3, 1, 2, 4, 3] => sum = 8; min = 4
     l     i
 [2, 3, 1, 2, 4, 3] => sum = 6; 
     l        i
 [2, 3, 1, 2, 4, 3] => sum = 10; min = 4
        l     i
 [2, 3, 1, 2, 4, 3] => sum = 7; min = 3
           l  i
 [2, 3, 1, 2, 4, 3] => sum = 6; min = 3
           l     i
 [2, 3, 1, 2, 4, 3] => sum = 9; min = 3
              l  i
 [2, 3, 1, 2, 4, 3] => sum = 7; min = 2
 */
 var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let minLength = Infinity;
    let left = 0;

    for(let i = 0; i < nums.length; i++ ) {
        sum += nums[i];        
        while(sum >= target) {
            minLength = Math.min(minLength, i - left + 1)
            sum -= nums[left];
            left++; 
        }
    }
    return minLength === Infinity ? 0 : minLength;
};
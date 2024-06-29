/**
 * 
Test Result
1. Two Sum
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = left + 1;
    let end = nums.length -1;
    while(left < right && right <= end) {
        let result = nums[left] + nums[right];        
        if(result === target) return [left, right];

        if(left <= end - 2 && right < end) {
            right++;
        } else if(left <= end - 2 && right === end) {
            left++;
            right = left + 1; 
        } else {
            return []
        }
    }
};

//if we consider a sorted array and return the values intead the indexes:
function twoNumberSum (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  nums.sort((a,b) => a - b)
    
  while(left < right){
  	let result = nums[left] + nums[right]
    
  	if(result === target) return [nums[left], nums[right]]
  
  	//if sum > target => decrementar right
  	if(result > target) {
    	right--;
    } else { //if sum < target => incrementar left
    	left++;
    }  
  }
  return []
}
exports.twoNumberSum = twoNumberSum;
/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.

The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
Constraints:
3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}

Input: nums = [-1,0,1,2,-1,-4]
SortedArr =   [-4,-1,-1,0,1,2]
*/

var threeSum = function(array) {
    if(array.length < 3) return [];
    
    //sort
    array.sort((a,b)=>a-b);
    let result = [];

    for(let i = 0; i < array.length -2; i++) {
        let j = i+1;
        let k = array.length - 1;

        while(j < k) {
            let sumArr = [array[i],array[j],array[k]]
            let sum = sumArr.reduce((a,b)=>a+b,0)

            if(sum === 0) {
                result.push(sumArr);
                //validate duplicates for "j" and "k"
                while(array[j] === array[j+1]) j++;
                while(array[k] === array[k-1]) k--;
                j++;
                k--;
            } else if(sum < 0) {
                j++;
            } else {
                k--;
            }
        }
        //validate duplicates for "i"
        while(array[i] === array[i+1]) i++;
    }
    return result;
}


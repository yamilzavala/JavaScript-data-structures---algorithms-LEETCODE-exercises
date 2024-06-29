/*
18. 4Sum
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
 

Constraints:
1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 nums = [1,0,-1,0,-2,2]
 sorted = [-2,-1, 0, 0, 1, 2]
 I + J + K + L = TARGET (0)

   I  J  K        L  
 [-2,-1, 0, 0, 1, 2] => (-2) + (-1) + 0 + 2 = -1 => -1 < 0 => K++; K++;
   I  J        K  L  
 [-2,-1, 0, 0, 1, 2] => (-2) + (-1) + 1 + 2 = 0 => result.push(newArr); L--; K++; => result: [[-2,-1,0,2]]
   I     J  K     L  
 [-2,-1, 0, 0, 1, 2] => (-2) + 0 + 0 + 2 = 0 => result.push(newArr); L--; K++; => result: [[-2,-1,0,2],[-2,0,0,2]]
   I     J     KL  
 [-2,-1, 0, 0, 1, 2] 
   I        J  K  L  
 [-2,-1, 0, 0, 1, 2] => (-2) + 0 + 1 + 2 = 1 => 1 > 0 => L--; 
      I  J  K     L  
 [-2,-1, 0, 0, 1, 2] => (-1) + 0 + 0 + 2 = 1 => 1 > 0 => L--; 
      I  J  K  L  
 [-2,-1, 0, 0, 1, 2] => (-1) + 0 + 0 + 1 = 0 => 1 > 0 => result.push(newArr); L--; K++; => result: [[-2,-1,0,2],[-2,0,0,2], [-1,0,0,1]]
      I  J  L  K 
 [-2,-1, 0, 0, 1, 2] => J++; J++; => I++;
         I  J  K  L 
 [-2,-1, 0, 0, 1, 2] => 0 + 0 + 1 + 2 = 3 => 3 > 0 => L--;
         I  J  KL   
 [-2,-1, 0, 0, 1, 2]
 */


 var fourSum = function(nums, target) {
    //sort => arr.sort((a,b)=>a-b)
    //skip duplicates => foward: while(arr[index] === arr[index+1]) index++; go back: while(arr[index] === arr[index-1]) index--;
    //four pointers => start, left, right, end
    //each pointer has a 2 position window to move

    if(nums.length < 4) return [];

    nums.sort((a,b)=>a-b);
    const result = [];

    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i+1; j < nums.length - 2; j++) {
            let k = j+1;
            let l = nums.length -1;

            while(k < l) {
                let sumArr = [nums[i],nums[j],nums[k],nums[l]]
                let sum = sumArr.reduce((a,b)=>a+b,0)
                
                if(sum === target) {
                  result.push(sumArr);
                  //validate duplicates for "k" and "l"
                  while(nums[k] === nums[k+1]) k++;
                  while(nums[l] === nums[l-1]) l--;
                  l--;
                  k++;      
                } else if(sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
            //validate duplicates for "j"
            while(nums[j] === nums[j + 1]) j++;    
        }
        //validate duplicates for "i"
        while(nums[i] === nums[i + 1]) i++;    
    }
    return result;
 }
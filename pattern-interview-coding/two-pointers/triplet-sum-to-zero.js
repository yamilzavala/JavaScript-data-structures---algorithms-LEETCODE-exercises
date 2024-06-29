

/**
 * @param {number[]} nums
 * @return {number[][]}

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

----------------------

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

----------------------

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
*/

/**
 * @param {number[]} nums
 * @return {number[][]}

Input: nums = [-1,0,1,2,-1,-4]

SortedArr =   [-4,-1,-1,0,1,2]

With a sorted array we ensure that:
-if the sum is less than zero, moving the start pointer to the right (start++), the sum will be greater and closer to zero
-if the sum is greater than zero, moving the end pointer to the left (end--), the sum will be greater and closer to zero
-if the sum is equal to zero, we need to move both pointers becase the below conditions.

C = Current
S = Start
E = End

  C  S           E
[-4,-1,-1, 0, 1, 2] => -4 -1  2 = -3 < 0 => increment S++
  C     S        E
[-4,-1,-1, 0, 1, 2] => -4 -1  2 = -3 < 0 => increment S++
  C        S     E               
[-4,-1,-1, 0, 1, 2] => -4  0  2 = -2 < 0 => increment S++ 
  C           S  E               
[-4,-1,-1, 0, 1, 2] => -4  1  2 = -1 < 0 => increment S++. As S must be lower than E, we pass to next iteration
     C  S        E            
[-4,-1,-1, 0, 1, 2] => -1 -1  2 = 0 => move both pointers; S++, E--; add array to result if this one don't exist in result. result = [[-1,-1,2]]
     C     S  E              
[-4,-1,-1, 0, 1, 2] => -1  0  1 = 0 => S++, E--; add array to result if this one don't exist in result. result = [[-1,-1,2], [-1,0,1]]
        C  S     E             
[-4,-1,-1, 0, 1, 2] => -1  0  1 = 0 => this array combination exist, so not add to result. S++, E-- 
           C  S  E              
[-4,-1,-1, 0, 1, 2] => 0  1  2 = 3 > 0 => decrement E--

Output: [[-1,-1,2],[-1,0,1]]
*/

//helper function to validate if arrays are equals
const validateIsEqualArr = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  //helper function to validate if current array existe in target array of arrays
  const validateDuplicateArr = (arrayOfArrays, targetArr) => {
      return arrayOfArrays.some(currArr => validateIsEqualArr(currArr, targetArr))
  }
  
  var threeSum = function(array) {
   const result = [];
   const sortedArr = array.sort((a,b)=>a-b)
  
   for(let init = 0; init < sortedArr.length; init++) {
      //two pointers pattern
      let start = init + 1;
      let end = sortedArr.length - 1;
  
      //ensure not collisions
      while(start < end) {
          let currArr = [sortedArr[init], sortedArr[start], sortedArr[end]];
          let sum = currArr.reduce((a,b) => a+b, 0);
  
          if(sum === 0 && !validateDuplicateArr(result, currArr)) {
              result.push(currArr);
              start++;
              end--;
          } else if(sum < 0) {
              start++;
          } else {
              end--;
          }
      }
   }
   return result;
  };
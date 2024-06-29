/*
977. Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
    Note:
    The function does not transform numbers from negative to positive, but rather works with the square property,
    where any number to be squared (positive or negative) equals positive.
    (-2) ** 2 = 4
      2  ** 2 = 4

    L = left
    C = current
    R = right

                L     C  R
    nums = [-5,-1, 0, 3, 4]
    result = u, u, u, u, 25  
                L  C  R
    nums = [-5,-1, 0, 3, 4]
    result = u, u, u, 16,25  
                L  C  R
    nums = [-5,-1, 0, 3, 4]
    result = u, u, 9, 16,25  
               LC  R
    nums = [-5,-1, 0, 3, 4]
    result = u, 1, 9, 16,25  
             C    LR
    nums = [-5,-1, 0, 3, 4]
    result = [0, 1, 9, 16,25]  
 */
    var sortedSquares = function(nums) {
        //array with empty spaces
        let squares = new Array(nums); //nums.length = 2 => squares [undefined, undefined]
     
        //pointers
        let left = 0;
        let right = nums.length -1;
        let currIndex = nums.length -1;
     
        while(left <= right) {
          if(nums[left]**2 > nums[right]**2) {
             squares[currIndex] = nums[left]**2;
             left++;
             currIndex--;
          } else {
             squares[currIndex] = nums[right]**2;
             right--;
             currIndex--;
          }
        } 
        return squares;
     };
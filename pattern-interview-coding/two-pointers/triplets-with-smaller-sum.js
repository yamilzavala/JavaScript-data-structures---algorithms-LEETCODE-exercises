

/**
 * @param {number[]} nums
 * @return {number[][]}

Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. 

Write a function to return the count of such triplets.

----------------------

Example 1:
Input: nums = [-1, 0, 2, 3], Target = 3
Output://2, there are two options: [-1, 0, 3], [-1, 0, 2]

Input = [-1, 4, 2, 1, 3], Target = 5
//4, There are four triplets whose sum is less than the target: [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]

Input = [-2,0,1,3], Target = 2
//2, Because there are two triplets which sums are less than 2: [-2,0,1], [-2,0,3]

Input = [], Target = 0
//0

Input = [0], Target = 0
//0
*/

// fn(target) < k + j + i

/**
 * @param {number[]} nums
 * @return {number[][]}


With a sorted array we ensure that:
-if the sum is greater or equal than target, move end pointer to the left (end--), the sum will be lower and closer to target. And increment result with:
 result = end - start.                                              C   S        E
 But why this? Becase for instance, if we have the following arr = [-1, 1, 2, 3, 4],
 sum = -1 + 1 + 4
 sum = 4
 so.. if arr is in order, the sum to folllowing numbers to start still end, should be lower to:
 sum -1 + 1 + 2 = 2
 sum -1 + 1 + 3 = 3

-if the sum is less than target, move start to right

Input: sorted = [-1, 0, 2, 3], 
Target = 5

S = Start
C = Current
E = End

  C  S        E
[-1, 1, 2, 3, 4] => -1  1  4 = 4 < 5 => result += E-S(3) => -1  1  2 = 2; -1  1  3 = 3; S++ 
  C     S     E
[-1, 1, 2, 3, 4] => -1  2  4 = 5 >= 5 => E--;
  C     S  E
[-1, 1, 2, 3, 4] => -1  2  3 = 4 < 5 => result += E-S(1); E--;
     C  S     E
[-1, 1, 2, 3, 4] => 1  2  4 = 7 > 5 => E--;
     C  S  E
[-1, 1, 2, 3, 4] => 1  2  3 = 6 > 5 => E--;
        C  S  E
[-1, 1, 2, 3, 4] => 2  3  4 = 9 > 5 => E--;

*/
var tripletWithSmallerSum  = function(array, target) {
  const sortedArr = array.sort((a,b)=>a-b)
  let result = 0;
  
  for(let init = 0; init < sortedArr.length - 2; init++) {
    //pointers
    let start = init + 1;
    let end = sortedArr.length - 1;
    
    while(start < end) {
      let sum = sortedArr[init] + sortedArr[start] + sortedArr[end];

      if(sum < target) {
        result += end - start;
        start++;
      } else {
         end--;
      }
    }
  }
  return result;
};

// const array = [-1, 1, 2, 3, 4]

// for (let i = 0; i < array.length - 2; i++) {
//   for (let j = i + 1; j < array.length - 1; j++) {
//     for (let k = j + 1; k < array.length; k++) {
//       console.log('array[i]:', array[i])
//       console.log('array[j]:', array[j])
//       console.log('array[k]:', array[k])
//       console.log('sum:', array[i] + array[j] + array[k] )
//       console.log('-----')
//     }
//   }  
// }

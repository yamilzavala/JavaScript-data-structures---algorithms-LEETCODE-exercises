/*
713. Subarray Product Less Than K
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8

Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]

Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
                  
Input: nums = [10, 5, 2, 6], k = 100
L = left
R = right
P = product
f(x) = a * n < k

 LR
[10, 5, 2, 6] => p = 10 * 1 = 10 < 100; count++; R++; count(1)
 L   R
[10, 5, 2, 6] => p = 10 * 5 = 50 < 100; count++; R++; count(2)
 L      R
[10, 5, 2, 6] => p = 50 * 2 = 100 >= 100; L++; R = L; count(2)
     LR
[10, 5, 2, 6] => p = 5 * 1 = 5 < 100; count++; R++; count(3)
     L  R
[10, 5, 2, 6] => p = 5 * 2 = 10 < 100; count++; R++; count(4)
     L     R
[10, 5, 2, 6] => p = 10 * 2 = 20 < 100; count++;L++; R=L; P=1; count(5)
        LR
[10, 5, 2, 6] => p = 1 * 2 = 2 < 100; count++; R++; count(6); 
        L  R
[10, 5, 2, 6] => p = 2 * 6 = 12 < 100; count++; L++; R=L; P=1; count(7); 
           LR
[10, 5, 2, 6] => p = 6 * 1 = 6 < 100; count++; R++; count(8); 


 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(k<=1) return 0;
    let product = 1;
    let count = 0;
    let start = 0;

    for(let end=0; end<nums.length; end++){  
        product = product * nums[end];

        if(product < k) {            
            count++;
            if(end+1 === nums.length && end !== start) {              
                start++;
                end = start - 1;
                product = 1;
            } 
        } else {
            product = 1;
            start++;
            end = start - 1;
        }
    }
    return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6],100))

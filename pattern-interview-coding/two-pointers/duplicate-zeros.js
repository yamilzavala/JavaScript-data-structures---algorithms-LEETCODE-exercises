/**
 * Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

Example 1:

Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, the input array is modified to: [1,2,3]
 * 
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
  * *                 * *
 [0,1,7,6,0,2,0,7]                     
 */
 var duplicateZeros = function(arr) {
    let countAddedZeros = 0;
    let left = 0;
    let right = left + 1;
    while(right < arr.length) {
        if(arr[left] === 0 || arr[right] === 0) {     
            //add new zero to the right
            arr.splice(right,0,0);
            countAddedZeros++;           
            if(arr[left] === 0 ) {
                //change pointers
                left = left + 2;
                right = left + 1;
            } else { 
                //change pointers
                left = left + 3;
                right = left + 1;
            }            
        } else {            
            //change pointers
            left++;
            right++;
        } 
    }
    if(countAddedZeros !== 0) {
     arr.splice(-countAddedZeros,countAddedZeros)    
    }
};
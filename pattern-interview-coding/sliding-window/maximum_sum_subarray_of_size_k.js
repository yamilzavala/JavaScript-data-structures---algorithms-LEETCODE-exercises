/*
Max Sum Subarray of size K
Difficulty: EasyAccuracy: 49.6%Submissions: 152K+Points: 2
Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.

NOTE*: A subarray is a contiguous part of any given array.

Example 1:
Input:
N = 4, K = 2
Arr = [100, 200, 300, 400]
Output:
700

Explanation:
Arr3  + Arr4 =700,
which is maximum.

Example 2:
Input:
N = 4, K = 4
Arr = [100, 200, 300, 400]
Output:
1000

Explanation:
Arr1 + Arr2 + Arr3 + Arr4 =1000,
which is maximum
*/

//naive solution
function max_sum_of_subarray(arr, k) {
    const size = arr.length;
    let total = 0;
    for(let i = 0; i + k <= size; i++) {
        let temp = 0;
        for(let j = i; j < i + k; j++) {
            temp += arr[j];
        }
        if(temp > total ) total = temp;
    }
    return total;
}
//console.log(max_sum_of_subarray([100, 200, 300, 400], 2))



//sliding window pattern
function max_sum_of_subarray_sliding_window(arr, k) {
    const size = arr.length;
    let total = arr.slice(0,k).reduce((a,b)=>a+b,0);
    for(let i = 0; i < size - k; i++) {
        let temp = total - arr[i] + arr[i+k];          
        if(temp > total ) total = temp;
    }
    return total;
}

console.log(max_sum_of_subarray_sliding_window([100, 200, 300, 400], 2))

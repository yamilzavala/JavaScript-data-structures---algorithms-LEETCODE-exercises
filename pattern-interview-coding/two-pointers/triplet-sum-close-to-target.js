/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}

Input: nums = [-1, 2, 1,-4], target = 1
Sorted arry = [-4,-1, 1, 2]

With a sorted array we ensure that:
-if the sum is less than zero, moving the start pointer to the right (start++), the sum will be greater and closer to zero
-if the sum is greater than zero, moving the end pointer to the left (end--), the sum will be greater and closer to zero
-if the sum is equal to zero, we need to move both pointers becase the below conditions.

C = Current
S = Start
E = End

    *     *     #  *
-4 -3 -2 -1  0  1  2  3  4   

  C   S     E
[-4, -1, 1, 2] => -4 -1  2 = -3 < 1 => increment S++
  C      S  E
[-4, -1, 1, 2] => -4  1  2 = -1 < 1 => increment S++
      C  S  E
[-4, -1, 1, 2] => -1  1  2 =  2 > 1 => decrement E++

mySet = [-3, -1, 2]
 */

//helper to calculate closest value to target
const calcClosest = (mySet, target) => {
    let subtractObj = {};
    let lowestKey = null;
    let lowestValue = Infinity;
    /*
    	{
      	sumValue: substruct
      	"-3": 4,
        "-1": 2,
        "2" : 1      
      }
    */
    for(let el of [...mySet]) {    
    	if(target === el) return el;        
        if(el > target) {
        	subtractObj[el] = el - target;
        } else {
        	subtractObj[el] = target - el;
        }
    }
    
    for(let key in subtractObj) {
    	if(subtractObj[key] < lowestValue) {
            lowestKey = key;
            lowestValue = subtractObj[key]
        };
    }
    return Number(lowestKey);
}


var threeSumClosest = function(nums, target) {
  const sortedArr = nums.sort((a,b)=>a-b);
    const closeValues = new Set();

    //two pointer pattern
    for(let init = 0; init < sortedArr.length; init++) {
        //pointers
        let start = init + 1;
        let end = sortedArr.length - 1;

				let currSum = 0;
        while(start < end){
            currArr = [sortedArr[init], sortedArr[start], sortedArr[end]];
            currSum = sortedArr[init] + sortedArr[start] + sortedArr[end];
            closeValues.add(currSum);    

            if(currSum < target) {
                start++;
            } else if(currSum > target) {
                end--;
            } else {
                start++;
                end--;
                return target;
            }
        }
    }
    return calcClosest(closeValues, target)
};
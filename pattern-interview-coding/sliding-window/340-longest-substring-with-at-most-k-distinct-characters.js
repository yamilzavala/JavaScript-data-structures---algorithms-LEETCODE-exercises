/*
340. Longest Substring with At Most K Distinct Characters

Given a string, find the length of the longest substring in it with no more than K distinct characters.
You can assume that K is less than or equal to the length of the given string.

Example 1: 
Input: 'aceba', K=2
Output: 3

Example 2: 
Input: 'aa', K=1
Output: 2


*/

function longestSubstringKDistinctCharacters(s,k) {
	//define pointers
	let left = 0;
  let right = 0;
  //define length
  let maxLenght = 0;
  //define table
  let hashTable = new Map()
  
  //find longest substring with k distinct characters
  while(right < s.length){
    //insert/update in table
    if(hashTable.has(`${s[right]}`)) {
    	hashTable.set(`${s[right]}`,hashTable.get(`${s[right]}`) + 1)
    } else {
    	hashTable.set(`${s[right]}`, 1)
    }  	  
   
    //contract window if don't match the condition
    while(hashTable.size > k){
    	hashTable.set(`${s[left]}`,hashTable.get(`${s[left]}`) - 1)
      if(hashTable.get(`${s[left]}`) === 0) {
      	hashTable.delete(`${s[left]}`)
      }
    	left++;
    }
    
    maxLenght = Math.max(maxLenght, right - left + 1);
    //expand window if match the condition
    right++;
  }

  //return maxLenght
  return maxLenght;
}

longestSubstringKDistinctCharacters('hooola',2)
/*
340. Longest Substring with At Most two Distinct Characters

Given a string, find the length of the longest substring in it with no more than two distinct characters.

Example 1: 
Input: 'eceba', K=2
Output: 3
Explanation: 'ece'

Example 2: 
Input: 'aa', K=1
Output: 2

Example 3: 
Input: 'ccaabbb', K=1
Output: 5
Explanation: 'aabbb'
*/

function longestSubstringTwoDistinctCharacters(s) {
	//define pointers
  let left = 0;
  let right = 0;

  //define lenght
  let maxLen = 0;
  //define table
  let table = new Map()

  //find length to substring
  while(right < s.length) {
    //insert/update in table
    const rightChar = s[right]
    table.set(rightChar, (table.get(rightChar) || 0) + 1)

    //if don't math the condition (table.size > 2) - contract window and remove elements in table
    while(table.size > 2) {
      const leftChar = s[left];
      table.set(leftChar, table.get(leftChar) - 1)
      if(table.get(leftChar) === 0) {
        table.delete(leftChar)
      }
      left++;
    }
    //increase window
    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  //return length
  return maxLen;
}

longestSubstringTwoDistinctCharacters('hooola') //output = 4

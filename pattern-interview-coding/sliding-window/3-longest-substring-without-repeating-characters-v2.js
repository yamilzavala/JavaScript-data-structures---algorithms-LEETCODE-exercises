/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring  without repeating characters.


Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 
 LR
 a   b   c   a   b   c   b   b => Set ['a']; longest = 1 
 */
 var lengthOfLongestSubstring = function(s) {
    //base case
    if(s.lenght < 2) return s.lenght;
    //define pointers
    let left = 0;
    let right = 0;
    //define table
    let table = new Map();
    //define len
    let longest = 0;
 
    //find longest substring
    while(right < s.length) {
        const char = s[right];
        table.set(char, (table.get(char) || 0) + 1)
       
        //if don't math the condition (table.has(s[right])) - contract window and remove elements in table
        while(table.size !== right - left + 1) {
            const leftChar = s[left];
            table.set(leftChar, table.get(leftChar) - 1)
            if(table.get(leftChar) === 0) {
                table.delete(leftChar)
            }
            left++;
        }
        //increase window
        longest = Math.max(longest, right - left + 1);
        right++;
    }
    //return len
    return longest;
 };
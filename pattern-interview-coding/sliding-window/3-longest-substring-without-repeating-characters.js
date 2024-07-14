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
 L   R
 a   b   c   a   b   c   b   b => Set ['a', 'b']; longest = 2
 L       R
 a   b   c   a   b   c   b   b => Set ['a', 'b', 'c']; longest = 3
 L           R
 a   b   c   a   b   c   b   b => (remove set from begenning); longest = 3
     L       R
 a   b   c   a   b   c   b   b => Set ['b', 'c', 'a']; longest = 3
     L           R
 a   b   c   a   b   c   b   b => (remove set from begenning); longest = 3
         L       R
 a   b   c   a   b   c   b   b  => Set ['c', 'a', 'b']; longest = 3
         L           R
 a   b   c   a   b   c   b   b  => (remove set from begenning); longest = 3
             L       R
 a   b   c   a   b   c   b   b  => Set ['a', 'b', 'c']; longest = 3
             L           R
 a   b   c   a   b   c   b   b  => (remove set from begenning); longest = 3
                 L       R
 a   b   c   a   b   c   b   b  => Set ['b', 'c']; longest = 3 => (remove set from begenning)
                     L   R
 a   b   c   a   b   c   b   b  => Set ['c', 'b']; longest = 3
                     L       R
 a   b   c   a   b   c   b   b  => Set ['b']; (remove set from begenning); longest = 3
                         L   R
 a   b   c   a   b   c   b   b  => Set []; (remove set from begenning); longest = 3
                             LR
 a   b   c   a   b   c   b   b  => Set ['b']; longest = 3

 */
 var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let set = new Set();
 
    let left = 0;
    let right = 0;
 
    while(right < s.length) {
     let letter = s[right]
 
     if(!set.has(letter)) {
         set.add(letter);
         right++;
         longest = Math.max(longest, set.size);
     } else {
         set.delete(s[left])
         left++;
     }
    }
    return longest;
 };

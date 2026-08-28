# 3. Longest Substring Without Repeating Characters

* **Platform**: LeetCode
* **Difficulty**: Medium
* **Language**: JavaScript
* **Problem Link**: [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## 🧠 AI Complexity Analysis

* ⏱️ **Time Complexity**: `O(N²)`
* 💾 **Space Complexity**: `O(1)`
* 🧩 **Pattern**: `Arrays & Hashing`
* 💡 **Intuition**: Uses nested iterations over the input dataset.
* 🎯 **Edge Cases**: Handles standard constraints, empty inputs, and boundary values.
* 🤖 *Engine: Static AI Engine*

## 🚀 What You Should Try Next

* 🎯 **Recommended Practice**: [Group Anagrams](https://leetcode.com/problems/group-anagrams/) (Medium)
* 💡 **Why Try Next**: Master hash map grouping with string keys.

## Solution Code
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
   let uniqueChars = new Set();
   let start = 0, end = 0, maxLength = 0;

   while(end < s.length){
    while(uniqueChars.has(s[end])){
        uniqueChars.delete(s[start]);
        start++;
    }
    uniqueChars.add(s[end]);
    maxLength = Math.max(maxLength, end - start + 1);
    end++;
   }

  return maxLength;
};
```

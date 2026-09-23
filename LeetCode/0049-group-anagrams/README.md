# 49. Group Anagrams

* **Platform**: LeetCode
* **Difficulty**: Medium
* **Language**: JavaScript
* **Problem Link**: [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## 🧠 AI Complexity Analysis

* ⏱️ **Time Complexity**: `O(N log N)`
* 💾 **Space Complexity**: `O(1)`
* 🧩 **Pattern**: `Arrays & Hashing`
* 💡 **Intuition**: Iterates through input elements to compute result efficiently. Involves initial array sorting.
* 🎯 **Edge Cases**: Handles standard constraints, empty inputs, and boundary values.
* 🤖 *Engine: Static AI Engine*

## 🚀 What You Should Try Next

* 🎯 **Recommended Practice**: [Group Anagrams](https://leetcode.com/problems/group-anagrams/) (Medium)
* 💡 **Why Try Next**: Master hash map grouping with string keys.

## Solution Code
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
 // Map: canonical key -> list of anagrams
  const map = new Map();

  for (const s of strs) {
    // Key 1 (simple): sort the string — "eat" -> "aet"
    // Key 2 (faster for long strings): count 26 letters
    const key = buildKey(s);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }

  return [...map.values()];
};

// Sorting key: O(k log k) per string
// const buildKey = (s) => [...s].sort().join("");

// Counting key: O(k) per string, better for long strings
function buildKey(s) {
  const count = new Array(26).fill(0);
  for (const c of s) count[c.charCodeAt(0) - 97]++;
  // Use a delimiter so "ab" vs counts don't collide ambiguously
  return count.join("#");
   
};
```

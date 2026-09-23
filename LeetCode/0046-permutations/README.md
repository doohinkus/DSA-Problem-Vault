# 46. Permutations

* **Platform**: LeetCode
* **Difficulty**: Medium
* **Language**: JavaScript
* **Problem Link**: [Permutations](https://leetcode.com/problems/permutations/)

## 🧠 AI Complexity Analysis

* ⏱️ **Time Complexity**: `O(N)`
* 💾 **Space Complexity**: `O(1)`
* 🧩 **Pattern**: `Arrays & Hashing`
* 💡 **Intuition**: Iterates through input elements to compute result efficiently.
* 🎯 **Edge Cases**: Handles standard constraints, empty inputs, and boundary values.
* 🤖 *Engine: Static AI Engine*

## 🚀 What You Should Try Next

* 🎯 **Recommended Practice**: [Group Anagrams](https://leetcode.com/problems/group-anagrams/) (Medium)
* 💡 **Why Try Next**: Master hash map grouping with string keys.

## Solution Code
```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
      const result = [];

  // used[i] tracks whether nums[i] is already in the current path
  const backtrack = (path, used) => {
    // Base case: path contains all elements → record a copy
    if (path.length === nums.length) {
      result.push([...path]); // must copy, path is mutated later
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // skip elements already in path

      // Choose
      path.push(nums[i]);
      used[i] = true;

      // Explore
      backtrack(path, used);

      // Un-choose (backtrack)
      path.pop();
      used[i] = false;
    }
  };

  backtrack([], new Array(nums.length).fill(false));
  return result;

};
```

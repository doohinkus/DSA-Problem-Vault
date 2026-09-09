# 349. Intersection of Two Arrays

* **Platform**: LeetCode
* **Difficulty**: Easy
* **Language**: JavaScript
* **Problem Link**: [Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)

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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Store all values from nums2 for fast lookup
    const nums2Set = new Set(nums2);

    // A Set automatically removes duplicate values
    const result = new Set();

    for (const num of nums1) {
        // Check whether nums2 contains this number
        if (nums2Set.has(num)) {
            result.add(num);
        }
    }

    // Convert the Set back into an array
    return [...result];
    
};
```

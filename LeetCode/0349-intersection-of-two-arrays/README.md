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
    let i = 0;
    const result = new Set();
    while(i < nums1.length){
      if(nums2.includes(nums1[i])){
        result.add(nums1[i]);
      }
      i++;
    }
    return [...result];
    
};
```

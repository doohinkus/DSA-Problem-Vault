# 1. Two Sum

* **Platform**: LeetCode
* **Difficulty**: Easy
* **Language**: JavaScript
* **Problem Link**: [Two Sum](https://leetcode.com/problems/two-sum/)

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
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let start = 0;
  let end = nums.length;
  const complimentMap = new Map();
  
  while(start < end){
    const compliment = target - nums[start];
    const complimentIndex = nums.indexOf(compliment);
                             
    if (complimentMap.has(compliment)){
      return [start, complimentMap.get(compliment)];
    }
    // add nums to set--preserving index
    complimentMap.set(nums[start], start);
    start++;
  }
}
```

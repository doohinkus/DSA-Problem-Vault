# 263. Ugly Number

* **Platform**: LeetCode
* **Difficulty**: Easy
* **Language**: JavaScript
* **Problem Link**: [Ugly Number](https://leetcode.com/problems/ugly-number/)

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
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    // early return
    if (n <= 0) return false;
    // factors
    const factors = [2, 3, 5];
    for(let factor of factors){
        // This is NOT true when n is divived evenly by a factor
        while(n % factor === 0){
           // divide by each factor
            n /= factor;
        }
    }
    // n will not be 1 if it's not divisible by each factor
    return n === 1;
    
};
```

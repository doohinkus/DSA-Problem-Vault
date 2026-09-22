# 202. Happy Number

* **Platform**: LeetCode
* **Difficulty**: Easy
* **Language**: JavaScript
* **Problem Link**: [Happy Number](https://leetcode.com/problems/happy-number/)

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
 * @return {number}
 */
function getSumOfDigits(n){
  let sum = 0;
  
  while(n > 0){
    // get last digit
    const digit = n % 10;
    // add squares to sum
    sum += digit * digit;
    // get remaining digits
    n = Math.floor(n / 10);
  }
  
  return sum;
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  let prev = n;
  let next = getSumOfDigits(n);
  // while next isn't 1 and prev is not next
  // next will be 1 OR next will equal prev
  while(next !== 1 && prev !== next){
    prev = getSumOfDigits(prev);
    next = getSumOfDigits(getSumOfDigits(next));
  }
  // next will be 1 OR next will equal prev
  // when next is 1, n is happy, otherewise it is not
  return next === 1;
    
};
```

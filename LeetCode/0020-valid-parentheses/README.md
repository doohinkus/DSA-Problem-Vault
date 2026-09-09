# 20. Valid Parentheses

* **Platform**: LeetCode
* **Difficulty**: Easy
* **Language**: JavaScript
* **Problem Link**: [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

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
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack stores opening brackets
    const stack = [];

    // Map each closing bracket to its matching opening bracket
    const matchingBracket = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        // If the character is an opening bracket, push it onto the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // For a closing bracket, get the most recent opening bracket
            const lastOpeningBracket = stack.pop();

            // The brackets are invalid if:
            // 1. There is no matching opening bracket
            // 2. The opening bracket does not match the closing bracket
            if (lastOpeningBracket !== matchingBracket[char]) {
                return false;
            }
        }
    }

    // The string is valid only if no opening brackets remain unmatched
    return stack.length === 0;
};
```

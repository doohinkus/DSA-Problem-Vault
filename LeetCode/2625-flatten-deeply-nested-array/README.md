# 2625. Flatten Deeply Nested Array

* **Platform**: LeetCode
* **Difficulty**: Medium
* **Language**: JavaScript
* **Problem Link**: [Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/)

## 🧠 AI Complexity Analysis

* ⏱️ **Time Complexity**: `O(V + E)`
* 💾 **Space Complexity**: `O(V)`
* 🧩 **Pattern**: `Graph / Tree Traversal`
* 💡 **Intuition**: Traverses nodes/vertices recursively or iteratively to visit all connected states.
* 🎯 **Edge Cases**: Handles standard constraints, empty inputs, and boundary values.
* 🤖 *Engine: Static AI Engine*

## 🚀 What You Should Try Next

* 🎯 **Recommended Practice**: [Number of Islands](https://leetcode.com/problems/number-of-islands/) (Medium)
* 💡 **Why Try Next**: Practices grid-based BFS/DFS matrix traversal.

## Solution Code
```js
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   // Stores the final flattened array
    const result = [];

    /**
     * Recursively processes each element in the current array.
     *
     * @param {any[]} items - The current array being processed
     * @param {number} depth - Depth of the current array
     */
    function dfs(items, depth) {
        for (const item of items) {
            // If the item is an array and we have not reached
            // the maximum allowed flattening depth, flatten it
            if (Array.isArray(item) && depth < n) {
                dfs(item, depth + 1);
            } else {
                // Add numbers or arrays that should remain unchanged
                result.push(item);
            }
        }
    }

    // The outermost array starts at depth 0
    dfs(arr, 0);

    return result;
};
```

# 2. Add Two Numbers

* **Platform**: LeetCode
* **Difficulty**: Medium
* **Language**: JavaScript
* **Problem Link**: [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

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
    while (l1 || l2 || carry) {

    let carry = 0;
    let tail = dummy;
    const dummy = { val: 0, next: null };
var addTwoNumbers = function(l1, l2) {

 */
        const sum = (l1 ? l1.val : 0) +
                    (l2 ? l2.val : 0) +
                    carry;

        carry = Math.floor(sum / 10);

        tail.next = {
            val: sum % 10,
            next: null
        };

        tail = tail.next;

```

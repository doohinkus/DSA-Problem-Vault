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
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    const holder = { val: 0, next: null };
    let tail = holder;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) +
                    (l2 ? l2.val : 0) +
                    carry;

        carry = Math.floor(sum / 10);

        tail.next = {
            val: sum % 10,
            next: null
        };

        tail = tail.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return holder.next;

};
```

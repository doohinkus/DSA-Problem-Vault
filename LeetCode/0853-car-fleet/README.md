# 853. Car Fleet

* **Platform**: LeetCode
* **Difficulty**: Medium
* **Language**: JavaScript
* **Problem Link**: [Car Fleet](https://leetcode.com/problems/car-fleet/)

## 🧠 AI Complexity Analysis

* ⏱️ **Time Complexity**: `O(N log N)`
* 💾 **Space Complexity**: `O(1)`
* 🧩 **Pattern**: `Arrays & Hashing`
* 💡 **Intuition**: Iterates through input elements to compute result efficiently. Involves initial array sorting.
* 🎯 **Edge Cases**: Handles standard constraints, empty inputs, and boundary values.
* 🤖 *Engine: Static AI Engine*

## 🚀 What You Should Try Next

* 🎯 **Recommended Practice**: [Group Anagrams](https://leetcode.com/problems/group-anagrams/) (Medium)
* 💡 **Why Try Next**: Master hash map grouping with string keys.

## Solution Code
```js
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const cars = position.map((pos, i) => [pos, speed[i]]);
    cars.sort((a, b) => b[0] - a[0]);
    let fleets = 0;
    let fleetTime = 0;

    for(const [pos, spd] of cars){
        const time =  (target - pos) / spd;
        if(time > fleetTime){
          fleets++;
          fleetTime = time;
        }
    }
    
    return fleets;
    
};
```

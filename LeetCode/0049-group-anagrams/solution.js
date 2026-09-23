// Sorting key: O(k log k) per string
// const buildKey = (s) => [...s].sort().join("");

// Counting key: O(k) per string, better for long strings
function buildKey(s) {
  // fill with 0s each index represents a letter from a-z (0-25)
  const count = new Array(26).fill(0);
  // 97 is lowercase 'a' 97 -> 98 -> 99 ...
  for (const c of s) {
    // flip the value in the array to 1 (cab) c: 99 - 97 = 2, a: 97 - 97 = 0, b: 98 - 97 = 1 
    // count[2] -> 1, count[0] -> 1, count[1] -> 1
    count[c.charCodeAt(0) - 97]++;
  }
  // Use a delimiter so "ab" vs counts don't collide ambiguously
  // [1, 1, 1, ,0, 0....] -> '1#1#1#0#...' without delimter 21
  return count.join(":");
   
};
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
 // Map: canonical key -> list of anagrams
  const map = new Map();

  for (const s of strs) {
    // Key 1 (simple): sort the string — "eat" -> "aet"
    // Key 2 (faster for long strings): count 26 letters
    const key = buildKey(s);
    if (!map.has(key)){
        map.set(key, []);
    } 

    map.get(key).push(s);
  }

  return [...map.values()];
};


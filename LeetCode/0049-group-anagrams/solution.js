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
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }

  return [...map.values()];
};

// Sorting key: O(k log k) per string
// const buildKey = (s) => [...s].sort().join("");

// Counting key: O(k) per string, better for long strings
function buildKey(s) {
  const count = new Array(26).fill(0);
  for (const c of s) count[c.charCodeAt(0) - 97]++;
  // Use a delimiter so "ab" vs counts don't collide ambiguously
  return count.join("#");
   
};
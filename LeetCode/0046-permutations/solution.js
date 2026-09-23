/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
      const result = [];

  // used[i] tracks whether nums[i] is already in the current path
  const backtrack = (path, used) => {
    // Base case: path contains all elements → record a copy
    if (path.length === nums.length) {
      result.push([...path]); // must copy, path is mutated later
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // skip elements already in path

      // Choose
      path.push(nums[i]);
      used[i] = true;

      // Explore
      backtrack(path, used);

      // Un-choose (backtrack)
      path.pop();
      used[i] = false;
    }
  };

  backtrack([], new Array(nums.length).fill(false));
  return result;

};
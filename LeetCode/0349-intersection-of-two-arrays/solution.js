/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Store all values from nums2 for fast lookup
    const nums2Set = new Set(nums2);

    // A Set automatically removes duplicate values
    const result = new Set();

    for (const num of nums1) {
        // Check whether nums2 contains this number
        if (nums2Set.has(num)) {
            result.add(num);
        }
    }

    // Convert the Set back into an array
    return [...result];
    
};
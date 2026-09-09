/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let i = 0;
    const result = new Set();
    while(i < nums1.length){
      if(nums2.includes(nums1[i])){
        result.add(nums1[i]);
      }
      i++;
    }
    return [...result];
    
};
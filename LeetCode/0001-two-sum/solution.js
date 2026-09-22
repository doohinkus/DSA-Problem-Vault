/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let start = 0;
  let end = nums.length;
  const complimentMap = new Map();
  
  while(start < end){
    const compliment = target - nums[start];
                             
    if (complimentMap.has(compliment)){
      return [start, complimentMap.get(compliment)];
    }
    complimentMap.set(nums[start], start);
    start++;
  }
}
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
    const complimentIndex = nums.indexOf(compliment);
                             
    if (complimentMap.has(compliment)){
      return [start, complimentMap.get(compliment)];
    }
    // add nums to set--preserving index
    complimentMap.set(nums[start], start);
    start++;
  }
}
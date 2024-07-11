/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentmapvalue = hashmap[nums[i]];
    if (currentmapvalue >= 0) {
      return [currentmapvalue, i];
    }
    const numbertofind = target - nums[i];
    hashmap[numbertofind] = i;
  }
  return [];
};
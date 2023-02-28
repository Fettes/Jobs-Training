/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let result = []
  if (nums.length === 0) return result

  nums.sort(function (a, b) {
    return a - b
  })

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1] && i > 0) continue

    let left = i + 1
    let right =  nums.length - 1

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        result.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left + 1] === nums[left]) left++
        while (left < right && nums[right - 1] === nums[right]) right--
        left++
        right--
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return result
};

// @lc code=end


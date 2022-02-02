// Leetcode #189. Rotate Array

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

const nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


// Example 2:

// const nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Attempt 1:
// Need to find a better way to reverse iterate based on size of 'k'
// const rotate = (nums, k) => {
//   const result = [...nums]
//   let count = 0
//   while(count <= k) {
//     for(let i = nums.length - 1; i > k; i--) {
//       result.unshift(result.pop())
//       count++
//     }
//   }
//   return result
// }


// Attempt 2:
const rotate = function(nums, k) {
  for(let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i]
  }

  for(let j = k - 1; j >= 0; j--) {
    nums[j] = nums.pop()
  }
  return nums
}


// O(n) time complexity
// O(1) space complexity
// Courtesy of hon9g https://leetcode.com/problems/rotate-array/discuss/487529/py3-js-5-different-simple-solutions 
// const rotate = (nums, k) => {
//   while(k--) nums.unshift(nums.pop())
//   return nums
// }

console.log(rotate(nums, k));
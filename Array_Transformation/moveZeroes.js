// Leetcode #283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// const nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// const nums = [0]
// Output: [0]

// Example 3:
const nums = [0,0,1]
// Output: [1,0,0]

// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1


// Attempt 1:
// Does not work in the case where two zeroes are positioned right next to each other
// const moveZeroes = (nums) => {
//   nums.map((e,i) => {
//     if(e === 0) {
//       let temp = nums[i]
//       nums.splice(i, 1)
//       nums.push(temp)
//     }
//   })
//   return nums
// }


// Attempt 2:
// Still not working for two simultaneous zeroes
// const moveZeroes = (nums) => {
//   for(let i = 0; i < nums.length; i ++) {
//     if(nums[i] === 0) {
//       let temp = nums[i]
//       nums.push(temp)
//       nums.splice(i,1)
//     }
//   }
//   return nums
// }


// Attempt 3:
// Addresses the issue of two zeroes next to each other
// const moveZeroes = (nums) => {
//   for(let i = nums.length - 1; i >= 0; i--) {
//     if(nums[i] === 0) {
//       nums.push(nums[i])
//       nums.splice(i, 1)
//     }
//   }
//   return nums
// }




// Courtesy of AbdulKhader4123 https://leetcode.com/problems/move-zeroes/discuss/72364/Javascript-124ms 
const moveZeroes = (nums) => {
  let count = 0; // this is to prevent an infinite loop
  for(let i = 0; i < nums.length; i++) {
    if(count === nums.length) break
    count++
    if(nums[i] === 0) {
      nums.splice(nums.length, 0, nums.splice(i, 1)[0])
      i--
    }
  }
  return nums
}

console.log(moveZeroes(nums));
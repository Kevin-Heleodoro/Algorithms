// Leetcode #977 Squares of a Sorted Array

// Given an integer array [nums] sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// const nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// const nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Example 3:
const nums = [-5, -3, -2, -1]
// Output: [1,4,9,25]


// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.


// Attempt 1:
// Solution works for Examples 1 & 2
// If the nums array is full of negatives, the return array will not be in ascending order
// const sortedSquares = (nums) => {
//   for(n in nums) {
//     nums[n] *= nums[n]
//   }
//   for(let i = 0; i < nums.length; i++) {
//     let temp;
//     if(nums[i] > nums[i + 1]){
//       temp = nums[i+1]
//       nums[i+1] = nums[i]
//       nums[i] = temp
//     }
//     if(nums[i - 1] > nums[i]) {
//       temp = nums[i-1]
//       nums[i-1] = nums[i]
//       nums[i] = temp
//     }
//   }
//   return nums
// }



//Attempt 2:
const sortedSquares = (nums) => {
  const result = []
  let head = 0, tail = nums.length - 1

  while(head <= tail) {
    if(nums[head] ** 2 > nums[tail] ** 2) result.push(nums[head++] ** 2)
    else result.push(nums[tail--] ** 2)
  }
  return result.reverse()
}

console.log(sortedSquares(nums));
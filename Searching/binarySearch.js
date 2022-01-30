// Leetcode -> Binary Search

// Given an array of integers [nums] which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: 
// const nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: 
// const nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints 
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.




// Brute Force solution
// O(n) time complexity 
// const search = function(nums, target) {
//   for(let i = 0; i < nums.length; i++){
//     if (nums[i] === target) return i;
//   }
//   return -1
// }





// Binary solution
// O(log n) time complexity 
const search = function(nums, target) {
  let lo = 0, hi = nums.length -1 // Set the left and right boundaries

  while(lo < hi) {
    let mid = lo + Math.floor((hi - lo + 1) / 2) // Sets the mid point to compare whether or not it is higher than the target -> Uses the upper half of array section
    
    if ( target < nums[mid]) hi = mid - 1

    else lo = mid
  }

  return nums[lo] === target ? lo : -1 // If lo is set to the index of target, return lo. Else return -1 if target is not present.
}


// const nums = [-1,0,3,5,9,12], target = 9 // 4
// const nums = [-1,0,3,5,9,12], target = 2 // -1

console.log(search(nums,target))
// Leetcode 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers [numbers] that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Constraints:

// 2 <= numbers.length <= 3 * 104
// -1000 <= numbers[i] <= 1000
// numbers is sorted in non-decreasing order.
// -1000 <= target <= 1000
// The tests are generated such that there is exactly one solution.


// Attempt 2:
// First attempt was using a single for loop, which worked for the first 3 test cases. -> one of the numbers had to be at index 0.
// With two loops, the time complexity goes up to O(n^2), but it works for the case that neither result number is the first in the array.
// const twoSum = function(numbers, target) {
//     let result = []
//     for(let i = 0; i < numbers.length; i++){
//         let current = numbers[i]
//         for(let j = 0; j < numbers.length; j++) {
//             if(current + numbers[j] === target && result.length < 2) {
//                 result.push(i+1, j+1)
//             }
//         }
//     }
//     return result
// };


// Attempt 3:
// .... edge case that target is 0 .....
// Does not work for example 6.
// const twoSum = function(numbers, target) {
//     let result = []
//     for(let i = 0; i < numbers.length; i++){
//         let current = numbers[i]
//         for(let j = 1; j < numbers.length; j++) {
//             if(current + numbers[j] === target && result.length < 2) {
//                 result.push(i+1, j+1)
//             }
//         }
//     }
//     return result
// };



// Attempt 4:
// Uses two pointer approach. Works on example 6, however will not work on the others.
// const twoSum = function(numbers, target) {
//   let left = 0, right = numbers.length - 1
//   let result = []
//   while ( left <= numbers.length) {
//     if(numbers[left] + numbers[right] === target) {
//       return [left + 1, right + 1]
//     }
//     left++
//     right--
//   }
//   return 'did not work'
// };




// Attempt 5 :
// -> Time limit exceeded with ridiculously long array of negative numbers.
// const twoSum = function(numbers, target){
//   if(numbers[numbers.length - 1] <= numbers[0]) return
//   let result = []
//   for(let i = 0; i < numbers.length; i++){
//     for(let j = 1; j < numbers.length; j++){
//       if(numbers[i] + numbers[j] === target && j !== i) {
//         result.push(i + 1, j + 1)
//       }
//     }
//   }
//   return result.slice(0, 2);
// }




// Courtesy of eliasylee https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/376245/Cleanest-JS 
// Uses two pointers approach. 
const twoSum = (numbers, target) => {
  let p1 = 0
  let p2 = numbers.length - 1
  
  while (numbers[p1] + numbers[p2] !== target) {
      if (numbers[p1] + numbers[p2] > target) {
          p2--
      } else {
          p1++
      }
  }
  return [p1 + 1, p2 + 1]
}

// Example 1:
// const numbers = [2,7,11,15], target = 9 //Output: [1,2]
// Example 2:
// const numbers = [2,3,4], target = 6 //Output: [1,3]
// Example 3:
// const numbers = [-1,0], target = -1 //Output: [1,2]
// Example 4:
// const numbers = [5, 25, 75], target = 100 // Output = [2,3]
// Example 5:
// const numbers = [0,0,3,4], target = 0 // Output= [1,2]
// Example 6:
const numbers = [1,2,3,4,4,9,56,90], target = 8 // Output = [4,5]

console.log(twoSum(numbers, target));
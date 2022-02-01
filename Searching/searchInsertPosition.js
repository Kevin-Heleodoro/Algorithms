// Leetcode #35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

const nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// const nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// const nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104



// O(log n) time complexity
// Courtesy of SyedFarhan1 https://leetcode.com/problems/search-insert-position/discuss/274547/Fastest-Javascript-solution-Binary-Search-log-n 

function searchInsert(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
 // If the target is less then the very last item then insert it at that item index
 // because anything index less then that has already been confirmed to be less then the target.
 // Otherwise insert it at that item index + 1
 // because any index grater then that has already been confirmed to be greater then the target
  if (start > end) return start;
  
  const midPoint = Math.floor((start + end)/2);
  
// found target
  if (array[midPoint] === target) return midPoint;
  
// search the left side
  if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
  // search the right side
  if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}



// O(log n) time complexity
// O(1) space complexity
// Courtesy of rohitdatrak https://leetcode.com/problems/search-insert-position/discuss/1042881/Binary-Search-Javascript-O(logn)-time-O(1)-space 

// var searchInsert = function(nums, target) {
//   let high = nums.length - 1;
//   let low = 0;
//   while (low <= high) {
//       let mid = Math.floor((high + low) / 2);
//       if (nums[mid] == target) return mid;
//       else if (nums[mid] > target) {
//           high = mid - 1;
//       } else {
//           low = mid + 1;
//       }
//   }
//   return low;
// };

console.log(searchInsert(nums, target));
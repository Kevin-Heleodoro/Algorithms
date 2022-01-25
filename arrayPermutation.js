/* Permutation of an array
Should log the next greatest number that is possible from the given array

TIPS:  
1. reverse part of array
2. element flipping
3. reverse iterate

*/

// Attempt 1:
// Only works for the first two tests. 
// Does not take into consideration the next greatest combination of elements.
// function permutation(arr){
//   let nextPermutation = arr.slice(0, arr.length - 2);

//   for(let i = arr.length - 1; i >= arr.length - 2; i-- ) {
//     nextPermutation.push(arr[i]) 
//   }

//   return nextPermutation
// }

// TEST VARIABLES
// const arr = [1,2,3] // Should return -> [1,3,2]
// const arr = [1,2,3,4] // Should return -> [1,2,4,3]
const arr = [5,6,4,7,9,3,2,8,1] // Should return -> [5,6,4,7,9,3,8,1,2], [5,6,4,7,9,3,8,2,1]

// Attempt 2:
// I can get the first correct permutation
// I will probably have to do two loops, or slice a piece off and find all possible combinations.
function permutation(nums){
  let result = {};
  let testNum = parseInt(nums.join(''))
  let temp;
  let count = 1;

  // Reverse iterate over the array
  for(let i = nums.length - 1; i >= 0; i--) {
    let current = nums[i]
    let next = nums[i - 1]

    if(next > current) {
      temp = i 
    } else if (current > next) {
      // Swap the elements that are bigger with the smaller ones after it in the array
      nums[i-1] = current;
      nums[i] = nums[temp] 
      nums[temp] = next

      // If swapping them creates the next possible biggest number,
      if(parseInt(nums.join('')) > testNum) {
        // push them into result object.
        result[count] = [...nums]
        count++
      };
    }
  }
  return `Possible permutations are: ${result[1]}`;
  // return result
}












// Solution from https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff 
// function permutation(arr){
//   let result = [];
//   if(arr.length === 0) return ['nope'];
//   if(arr.length === 1) return [arr];

//   for(let i = 0; i < arr.length; i++) {
//     const current = arr[i]
//     console.log(current);
//   }

//   return result;
// }

console.log(permutation(arr));
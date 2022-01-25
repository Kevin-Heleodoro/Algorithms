/* Permutation of an array
Should log the next greatest number that is possible from the given array

TIPS:  
1. reverse part of array
2. element flipping
3. reverse iterate

*/


// TEST VARIABLES
const arr = [1,2,3] // Should return -> [1,3,2]
// const arr = [1,2,3,4] // Should return -> [1,2,4,3]
// const arr = [5,6,4,7,9,3,2,8,1] // Should return -> [5,6,4,7,9,3,8,1,2], [5,6,4,7,9,3,8,2,1]




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





// Attempt 2:
// I can get the first correct permutation
// I will probably have to do two loops, or slice a piece off and find all possible combinations of the slice, then slap it back onto the array.
// function permutation(arr){
//   let result = {};
//   let nums = [...arr]
//   let testNum = parseInt(nums.join(''))
//   let temp;
//   let count = 1;

//   // Reverse iterate over the array
//   for(let i = nums.length - 1; i >= 0; i--) {
//     console.log(nums);
//     let current = nums[i]
//     let next = nums[i - 1]

//     if(next > current) {
//       temp = i 
//     } else if (current > next) {
//       // Swap the elements that are bigger with the smaller ones after it in the array
//       nums[i-1] = current;
//       nums[i] = nums[temp] 
//       nums[temp] = next

//       // If swapping them creates the next possible biggest number,
//       if(parseInt(nums.join('')) > testNum) {
//         // push them into result object.
//         result[count] = [...nums]
//         count++
//       };
//     }
//   }
//   return `Possible permutations are: ${result[1]}`;
//   // return result
// }





// Attempt 3:
// Working on getting all possible permutations ... implement the slice method
// function permutation(arr){
//   let result = {};
//   let nums = [...arr]
//   let testNum = parseInt(arr.join(''))
//   let temp;
//   let count = 1;
//   let slice;

//   // Reverse iterate over the array
//   for(let i = arr.length - 1; i >= 0; i--) {
    
//     let current = arr[i]
//     let next = arr[i - 1]

//     if(next > current) {
//       temp = i 
//     } else if (current > next) {
//       slice = nums.slice(i)
//       for(let j = slice.length -1; j <= 0; j --) {
//         console.log('???');
//       }
      
//       // Swap the elements that are bigger with the smaller ones after it in the array
//       nums[i-1] = current;
//       nums[i] = arr[temp] 
//       nums[temp] = next

//       // If swapping them creates the next possible biggest number,
//       if(parseInt(nums.join('')) > testNum) {
//         // console.log(slice);
//         // push them into result object.
//         result[count] = [...nums]
//         count++
//       };
//       // console.log(stopper);
//     }
//     // console.log(nums);
//   }
//   return `Possible permutations are: ${result[1]}`;
//   // return result
// }





// Garrett Walkthrough:

// find the peak
// next largest number to the right of peak
// flip peak = 1 and largest number to right of the peak
// reverse from peak to end of arr

// function permutation(arr) {
//   // declare peak var
//   let peak
//   // find peak / reverse iterate through arr
//   for(let i = arr.length; i >= 0; i--) {
//       // if no peak, set to zero
//       if(i === 0) {
//           peak = 0
//       }
//       // if arr[i] > arr[i - 1] , remember to break out
//       if(arr[i] > arr[i - 1]) {
//           peak = i
//           break
//       }
//   }
//   // find largest on right of peak
//   for(let j = arr.length - 1; j >= 0; j--) {
//       // if arr[j] > arr[peak - 1], flip arr[j] and arr[peak - 1], remember to break
//       if(arr[j] > arr[peak - 1]) {
//           let temp = arr[j]
//           arr[j] = arr[peak - 1]
//           arr[peak - 1] = temp
//           break
//       }
//   }
//   let start = peak 
//   let end = arr.length - 1

//   while(start < end) {
//     // flip start and end, remember to decrement end and increment start
//       let temp = arr[start]
//       arr[start] = arr[end]
//       arr[end] = temp
//       start++
//       end--
//   }

//   return arr    
// }













// Solution from https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff 
// function permutation(arr){
//   let result = [];
//   if(arr.length === 0) return [];
//   if(arr.length === 1) return [arr];

//   for(let i = 0; i < arr.length; i++) {
//     const current = arr[i]
//     const remaining = arr.slice(0, i).concat(arr.slice(i + 1))
//     const remainingPermuted = permutation(remaining)

//     for(let j = 0; j < remainingPermuted.length; j++) {
//       const permutedArray = [current].concat(remainingPermuted[j])
//       result.push(permutedArray)
//     }
//   }

//   return result;
// }

console.log(permutation(arr));
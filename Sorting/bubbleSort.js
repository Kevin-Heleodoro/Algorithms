/**
Bubble Sort
Average time complexity -> O(n^2)
Average space complexity -> O(1)
https://en.wikipedia.org/wiki/Bubble_sort

 */


// TEST VARIABLES
const arr = [1,8,9,5,4,3,2,6]; // -> [1,2,3,4,5,6,8,9]
// const arr = [9,8,7,6,5,4,3,2,1]; // -> [1,2,3,4,5,6,7,8,9]
// const arr = [5,'a',3,7,'12'];
// const arr = 


// Attempt 1:
// O(n^2) time complexity
// O(n) space complexity?
// function bubbleSort(arr) {
//   for(let i = 0; i < arr.length; i ++){

//     for(let j = 0; j < arr.length; j++) {
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j+1]
//         arr[j+1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }



// Attempt 2:
// Will only loop through once, so at best it will push the largest number to the end of array.
// function bubbleSort(arr){
//   arr.forEach((e, i) => {
//     if(e > arr[i + 1]) {
//       let temp = arr[i + 1]
//       arr[i + 1] = e
//       arr[i] = temp
//     }
//   })
//   return arr
// }





// Attempt 3:
// Plan to do this recursively.
// function bubbleSort(arr) {
//   let peak;

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > arr[i+1]) peak = arr[i]
//   }


// }





// Garrett Solution
// O(n^2) time complexity
// function bubbleSort(arr) {
//   //outer loop
//   for(let i = arr.length; i > 0; i--) {

//     //inner loop
//     for(let j = 0; j < i; j++) {

//       //comparison
//       if(arr[j] > arr[j+1]) {
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }


console.log(bubbleSort(arr));
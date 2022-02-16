// Take in a string, without using reverse, check to see if string is a palindrome

// // Attempt 1:
// // O(n) time complexity
// const pal = (str) => {
//   const result = []
//   for(let i = str.length - 1; i >= 0; i--) {
//     result.push(str[i])
//   }
//   return result.join("") === str
// }

// // const test = 'racecar' // -> true
// const test = 'test' // -> false

// console.log(pal(test));


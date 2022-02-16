

// First repeating character

// const test = 'abcdefghijklmmnopqrstuvwxxxyz' // -> m
// const test = 'acde' // -> no repeat
// const test = 'abdeaf' // -> a


// Attempt 1:
// O(n^2) time complexity
// const firstRepeating = (str) => {
//   let repeat = ''
//   for(let i = 0; i < str.length; i ++) {
//     if(repeat.includes(str[i])) return str[i]
//     repeat += str[i]
//   }
//   return 'no repeat'
// }

// Attempt 2:
// O(n) time complexity
// const firstRepeating = (str) => {
//   for(let i = 0; i < str.length; i ++) {
//     if(str[i] === str[i + 1]) return str[i]
//   }
//   return 'no repeat'
// }

// Garrett solution
// O(n) time complexity
// IU
// function firstRepeating(str) {
//   const obj = {}

//   for(let letter of str) {
//     if(!obj[letter]) obj[letter] = 1
//     else return letter
//   }
//   return 'no repeat'
// }

// console.log(firstRepeating(test));


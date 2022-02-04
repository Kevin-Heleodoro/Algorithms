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





// Longest palindrome in paragraph of text
// const text = 'John was from the city and liked to drive his racecar all around the track. His home boy said that the car was red enough, but ole John said that he wanted the car to be even redder for true. So, he painted it redder. and it was cool lookin for sure. He also had a thing about being chased by the cops.'

// const pal = (str) => {
//   const result = []
//   for(let i = str.length - 1; i >= 0; i--) {
//     result.push(str[i])
//   }
//   return result.join("") === str
// }

// const palFinder = (str) => {
//   let allWords = str.split(" ")
//   let longestPal = ''
//   allWords.forEach(word => {
//     if(word[0] === word[word.length - 1]) {
//       const isPal = pal(word)
//       if(isPal && word.length > longestPal.length) longestPal = word
//     }
//   })
//   return longestPal
// }

// console.log(palFinder(text));







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

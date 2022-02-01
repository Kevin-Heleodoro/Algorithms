// Find the longest palindrome substring of string
// Do not use nested 'for' loops

// Given a string, return the longest palindromic subsequence.
// const test = 'abaccccdef' // -> 'cccc'
// const test = 'abcdefcccc' // -> 'cccc'
// const test = 'tacocat' // -> 'tacocat'
const test = 'aaatacocatbbb' // -> 'tacocat'

// Attempt 1:
// Will work if palindrome begins at index 0
// function longestPal(str) {
//   let stringArray = []
//   let temp = ''
//   for(let i = 0; i < str.length; i ++) {
//     temp += str[i]
//     if(temp.split("").reverse().join("") === temp) {
//       stringArray.push(temp)
//     }
//   }
//   return stringArray
// }


// Attempt 2:
// Biggest issue I am currently having is being stuck in an infinite loop while trying to see how far away from test[i] the matches continue. -> solved
// Now the issue is dealing with even length palindromes
function longestPal(test) {
  let longest = ''

  for(let i = 0; i < test.length; i++) {
    let currentPal = test[i]
    let iteration = 1

    if(test[i+iteration] === test[i-iteration]) {
      currentPal = test[i-iteration] + currentPal + test[i+iteration]
      iteration++

      while(iteration > 1){
        if(test[i + iteration] === test[i - iteration]) {
          currentPal = test[i-iteration] + currentPal + test[i + iteration]
          iteration++
        }
        else iteration = 1
      }
      console.log(currentPal);
      if(currentPal.length > longest.length) longest = currentPal
    }
  }
  return `The longest palindrome is '${longest}' at a length of ${longest.length} elements`
}


console.log(longestPal(test));
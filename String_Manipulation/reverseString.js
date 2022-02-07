// Leetcode 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
const s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// const s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:
// 1 <= s.length <= 105
// s[i] is a printable ascii character.


// Attempt 1:
// O(n) time complexity
// O(1) space complexity
// Built in method approach
// const reverseString = function(s){
//   return s.reverse()
// }



// Attempt 2:
// O(n) time complexity
// Two pointers approach -> faster than 16.86% ... not fast enough
// const reverseString = function(s) {
//   let left = 0, right = s.length - 1;
//   while( left <= right) {
//     let temp = s[left]
//     s[left]= s[right]
//     s[right]= temp
//     left++
//     right--
//   }
//   return s
// }




// Courtesy of hon9g https://leetcode.com/problems/reverse-string/discuss/480217/JS-2-pointer-technique-2-liner 
// Cleaner variation of what I did in attempt 2 with two pointers
// var reverseString = (s) => {
//   for(let [a,b] = [0, s.length-1]; a < b; a++, b--){
//     [s[a], s[b]] = [s[b], s[a]]; 
//   }
//   return s
// }


// Courtesy of hon9g https://leetcode.com/problems/reverse-string/discuss/480217/JS-2-pointer-technique-2-liner 
// Recursion approach
// Still an O(n) time complexity, but space complexity has gone up to O(n).
var reverseString = s => {
  reverse(0, s.length - 1);

  function reverse(i, j) {
    if(i >= j) return;
    [s[i], s[j]] = [s[j], s[i]];
    reverse(i+1, j -1)
  }
}

console.log(reverseString(s));
console.log(s);
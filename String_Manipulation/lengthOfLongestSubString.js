// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
	let sLength = s.length,
		maxLength = 0,
		longStr = '',
		tempStr,
		index;

	for (let i = 0; i < sLength; i++) {
		tempStr = s[i];
		index = longStr.indexOf(tempStr);

		if (index > -1) {
			longStr = longStr.substring(index + 1);
		}

		longStr += tempStr;
		maxLength = Math.max(maxLength, longStr.length);
	}

	return maxLength;
};

// let test = 'abcabcbb'; //3
let test = 'pwwkew'; //3

console.log(lengthOfLongestSubstring(test));

// LeetCode 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// function longestCommonPrefix(strs) {
// 	let longestPrefix = {}

// 	strs.forEach(word => {
// 		for(let i = 0; i < word.length; i++) {
// 			if(!longestPrefix[word[i]]) longestPrefix[word[i]] = 1;

// 			else(longestPrefix[word[i]] += 1)
// 		}
// 	})

// 	let count = 1;
// 	let prefix = '';
// 	for(keys in longestPrefix) {
// 		if(longestPrefix[keys] > count) {
// 			count = longestPrefix[keys]
// 			prefix += keys
// 		}
// 	}

// 	// return {longestPrefix, prefix}
// }

const longestCommonPrefix = function(strs) {
	// Sort all the words, which will allow us to compare only the first and last ones.
	strs.sort()
	for (let i = 0; i < strs[0].length; i++) {
		// As soon as two characters don't match, return the substring up until that index.
		if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
	}
	return '';
}

// const string = ['flower', 'flow','flight']
const string = ['dog','racecar','car'];

console.log(longestCommonPrefix(string));
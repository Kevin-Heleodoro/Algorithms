// LeetCode #392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

let s = "abc",
	t = "ahbgdc"; // true
// let s = "axc",
// 	t = "ahbgdc"; // false

const isSubsequence = function (s, t) {
	let regex = new RegExp(s.split("").join(".*"));

	if (t.match(regex)) return true;

	return false;
};

console.log(isSubsequence(s, t));

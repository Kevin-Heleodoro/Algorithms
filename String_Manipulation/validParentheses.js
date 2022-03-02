// LeetCode 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// let s = "()"; //true
// let s = "()[]{}"; //true
// let s = "(]"; //false
let s = "{[]}"; //true

// Attempt #1
// FAIL -> Does not work on nested parentheses.
// const isValid = function (s) {
// 	for (let i = 0; i < s.length; i++) {
// 		if (s[i] === "(" && s[i + 1] !== ")") return false;
// 		if (s[i] === "[" && s[i + 1] !== "]") return false;
// 		if (s[i] === "{" && s[i + 1] !== "}") return false;
// 	}

// 	return true;
// };

// Using a map
const isValid = function (s) {
	const stack = []; // To push the closing bracket
	const map = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	for (let i = 0; i < s.length; i++) {
		let current = s[i];
		if (map[current]) {
			// If it is an opening bracket,
			stack.push(map[current]); // push the closing bracket onto the stack.
		} else if (current !== stack.pop()) {
			// If it is a closing bracket and it is not the last element in the stack,
			return false; //return false
		}
	}

	return !stack.length;
};

console.log(isValid(s));

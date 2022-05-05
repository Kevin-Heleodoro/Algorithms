// LeetCode #844

// ### Instructions
// - Given two Strings 'S' and 'T', return if they equal when both are types out. Any '#' that appears in the string counts as a backspace.
// >- Example: 'cb#d === 'cd'

// // best case tests

// const S = 'ab#z';
// const T = 'az#z';

// // both S and T will equal 'az'
// // returns true

// const S = 'abc#d'; // abd
// const T = 'acc#c'; // acc
// // returns false

// const S = 'x#y#z#'; // ''
// const T = 'a#'; // ''
// // returns true

// const S = 'a###b'; // b
// const T = 'b'; // b
// //returns true

// const S = 'Ab#z'; // 'Az'
// const T = 'ab#z'; // 'az'
// // returnd false

const S = 'ab##';
const T = 'c#d#';

function equalityTester(S, T) {
	console.log(hashChecker(S));
	console.log(hashChecker(T));
	return hashChecker(S) === hashChecker(T);
}

function hashChecker(str) {
	let result = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '#') {
			result.pop();
		} else {
			result.push(str[i]);
		}
	}

	return result.join('');
}

console.log(equalityTester(S, T));
// console.log('' === '');

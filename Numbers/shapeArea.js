// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

// For n = 2, the output should be
// solution(n) = 5;
// For n = 3, the output should be
// solution(n) = 13.

// Attempt 1:
// Fail after n = 2
// function solution(n) {
// 	if (n === 1) return 1;

// 	let result = 1;
// 	let count = 0;
// 	while (count < n) {
// 		count++;
// 		console.log("count is " + count);
// 		result += count * count;
// 		console.log(`result is ${result}`);
// 	}

// 	return result - 1;
// }

function solution(n) {
	// if n = 1, it returns 1
	let area = 1;
	// loop from 1 to n
	for (let i = 1; i <= n; i++) {
		// we want to continue in all 4 directions while maintaining flat sides.
		area += i * 4 - 4;
	}
	return area;
}

// let n = 2; // 5
// let n = 3; // 13
let n = 4; // 25

console.log(solution(n));

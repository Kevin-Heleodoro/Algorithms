// function solution(s, t) {
// 	const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// 	let count = 0;

// 	for (let i = 0; i < s.length; i++) {
// 		if (parseInt(s[i]) !== NaN) {
// 			let left = s.slice(0, i);
// 			let right = s.slice(i + 1);
// 			let currentTest = left.concat(right);
// 			if (currentTest < t) count++;
// 		}
// 	}

// 	// if t[j] === 0, it is returning a falsy value. ... figure this out
// 	for (let j = 0; j < t.length; j++) {
// 		let number = parseInt(t[j]);
// 		if (number) {
// 			console.log(t[j]);
// 			let left = t.slice(0, j);
// 			let right = t.slice(j + 1);
// 			let currentTest = left.concat(right);
// 			if (currentTest > s) count++;
// 		}
// 	}

// 	return count;
// }

// let s = "4u05q";
// let t = "ed0r7";

// console.log(solution(s, t));

// Minesweeper is a popular single-player computer game. The goal is to locate mines within a rectangular grid of cells. At the start of the game, all of the cells are concealed. On each turn, the player clicks on a blank cell to reveal its contents, leading to the following result:

// If there's a mine on this cell, the player loses and the game is over;
// Otherwise, a number appears on the cell, representing how many mines there are within the 8 neighbouring cells (up, down, left, right, and the 4 diagonal directions);
// If the revealed number is 0, each of the 8 neighbouring cells are automatically revealed in the same way.

// You are given a boolean matrix field representing the distribution of bombs in the rectangular field. You are also given integers x and y, representing the coordinates of the player's first clicked cell - x represents the row index, and y represents the column index, both of which are 0-based.

// Your task is to return an integer matrix of the same dimensions as field, representing the resulting field after applying this click. If a cell remains concealed, the corresponding element should have a value of -1.

// It is guaranteed that the clicked cell does not contain a mine.

// Example

// For
let field = [
	[false, true, true],
	[true, false, true],
	[false, false, true],
];
let x = 1,
	y = 1;

// the output should be
// solution(field, x, y) = [[-1, -1, -1],
//                                  [-1, 5, -1],
//                                  [-1, -1, -1]

function solution(field, x, y) {
	let updatedField = [];

	let row = field[x];
	let column = row[y];

	for (let i = 0; i < field.length; i++) {
		let row = [];
		if (row === field[i]) {
			if (!column) {
			}
		}
	}
	return updatedField;
}

console.log(solution(field, x, y));

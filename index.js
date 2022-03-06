// Almost Increasing Sequence

// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// let sequence = [1, 3, 2, 1]; // false
// let sequence = [1, 3, 2]; // true
let sequence = [1, 1, 2, 3, 4, 4]; // false // My first solution does not work with this test because I am not tracking how many times an element can be removed to make it consecutive.

function solution(sequence) {
	let test;
	for (let i = 1; i < sequence.length; i++) {
		test = [...sequence];
		test.splice(i, 1);
		let result = compareIncrease(test);
		if (!result) return false;
	}
	return true;
}

function compareIncrease(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i + 1]) return false;
	}
	return true;
}

console.log(solution(sequence));

// function solution(seq) {
// 	var bad=0
// 	for(var i=1;i<seq.length;i++) if(seq[i]<=seq[i-1]) {
// 	  bad++
// 	  if(bad>1) return false
// 	  if(seq[i]<=seq[i-2]&&seq[i+1]<=seq[i-1]) return false
// 	}
// 	return true
//   }

////
////
///
// Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

// Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

// Example

// For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].

// (numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
// (numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
// (numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;
// For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];

// Since all the elements of numbers are increasing, there are no zigzags.

// For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].

// Since all the elements of numbers are the same, there are no zigzags.

function solution(numbers) {
	let zagArray = [];

	for (let i = 0; i < numbers.length - 2; i++) {
		let left = numbers[i],
			mid = numbers[i + 1],
			right = numbers[i + 2];
		if ((left < mid && mid > right) || (left > mid && mid < right))
			zagArray.push(1);
		else zagArray.push(0);
	}

	return zagArray;
}

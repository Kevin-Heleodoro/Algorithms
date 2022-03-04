// Make Array Consecutive 2

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

function solution(statues) {
	let count = 0;

	statues = bubbleSort(statues);

	for (let i = 0; i < statues.length; i++) {
		let prev = statues[i - 1];
		if (statues[i] - prev > 1) count += statues[i] - prev - 1;
	}

	return count;
}

function bubbleSort(arr) {
	//outer loop
	for (let i = arr.length; i > 0; i--) {
		//inner loop
		for (let j = 0; j < i; j++) {
			//comparison
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

let statues = [6, 2, 3, 8]; // 3
console.log(solution(statues));

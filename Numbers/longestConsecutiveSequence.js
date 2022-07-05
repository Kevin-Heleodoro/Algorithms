// var longestConsecutive = function (nums) {
// 	let numObj = {};

// 	for (n in nums) {
// 		numObj[nums[n]] = true;
// 	}

// 	let prev = 0;
// 	let counter = 0;
// 	let result = 0;
// 	for (key in numObj) {
// 		if (key - prev <= 1) {
// 			prev = key;
// 			counter++;
// 			result <= counter ? (result = counter) : '';
// 		} else {
// 			prev = key;
// 			counter = 0;
// 		}
// 	}

// 	console.log(numObj);
// 	return result;
// };

function longestConsecutive(nums) {
	if (nums == null || nums.length === 0) return 0;

	const set = new Set(nums);
	let max = 0;

	for (let num of set) {
		if (set.has(num - 1)) continue; // make sure starting from the beginning of sequence

		let currNum = num;
		let currMax = 1;

		while (set.has(currNum + 1)) {
			currNum++;
			currMax++;
		}
		max = Math.max(max, currMax);
	}

	return max;
}

// let nums = [100, 4, 200, 1, 3, 2];
// let nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
let nums = [9, 1, -3, 2, 4, 8, 3, -1, 6, -2, -4, 7];
console.log(longestConsecutive(nums));

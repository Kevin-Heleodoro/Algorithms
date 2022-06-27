// const twoSum = function (nums, target) {
// 	const resultObj = {};
// 	for (let i = 0; i < nums.length; i++) {
// 		if (target - nums[i] in resultObj) {
// 			return [resultObj[target - nums[i]], i];
// 		}
// 		resultObj[nums[i]] = i;
// 	}
// };

// const twoSum = function (nums, target) {
// 	let map = new Map();

// 	for (let i = 0; i < nums.length; i++) {
// 		if (map.has(target - nums[i])) {
// 			return [map.get(target - nums[i]), i];
// 		} else {
// 			map.set(nums[i], i);
// 		}
// 	}
// 	return [];
// };

const twoSum = function (nums, target) {
	let hash = {};

	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (hash[target - n] !== undefined) {
			return [hash[target - n], i];
		}
		hash[n] = i;
	}
	return [];
};

let nums = [2, 7, 11, 15];
let target = 9;
// [0,1]

// let nums = [3, 2, 4];
// let target = 6;
// [1,2]

// let nums = [3,3]
// let target = 6
// [0,1]

// let nums = [2, 5, 5, 11];
// let target = [10];
// [1,2]

console.log(twoSum(nums, target));

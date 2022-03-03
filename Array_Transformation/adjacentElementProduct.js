// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

// Attempt 1:
// Does not account for negative products
function solution(inputArray) {
	let largestProduct = 0;

	for (let i = 0; i < inputArray.length - 1; i++) {
		let product = inputArray[i] * inputArray[i + 1];
		if (product > largestProduct) largestProduct = product;
	}

	return largestProduct;
}

// Top JS Solution
function solution(arr) {
	return Math.max(...arr.slice(1).map((x, i) => [x * arr[i]]));
}

// Merge Sort

let exampleArr = [10, -1, 2, 5, 0, 6, 4];

// Recursion
function mergeSortRecursion(unsortedArray) {
	// base case check
	if (unsortedArray.length <= 1) {
		return unsortedArray;
	}

	// find the middle
	const middle = Math.floor(unsortedArray.length / 2);

	// divide the array into two parts
	const left = unsortedArray.slice(0, middle);
	const right = unsortedArray.slice(middle);

	// recursively combine the left and right
	return merge(mergeSortRecursion(left), mergeSortRecursion(right));
}

function merge(left, right) {
	let resultArray = [];
	let l = 0; // left index
	let r = 0; // right index

	// concatenate values into resultArray
	while (l < left.length && r < right.length) {
		if (left[l] < right[r]) {
			resultArray.push(left[l]);
			l++; // move the left pointer
		} else {
			resultArray.push(right[r]);
			r++; // move the right pointer
		}
	}

	// Concat because there will be one element still remaining from either the left or right
	return resultArray.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSortRecursion(exampleArr));

let exampleArr = [10, -1, 2, 5, 0, 6, 4];

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	let middle = Math.floor(arr.length / 2);

	let left = arr.slice(0, middle);
	let right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let result = [];
	let l = 0;
	let r = 0;

	while (l < left.length && r < right.length) {
		console.log(result);
		if (left[l] < right[r]) {
			result.push(left[l]);
			l++;
		} else {
			result.push(right[r]);
			r++;
		}
	}

	return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort(exampleArr));

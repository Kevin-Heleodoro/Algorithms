// This was my original attempt ... I thought I was on the right track but I need
// to get more familiar with Math operations
// const findMedianSortedArrays = function (nums1, nums2) {
// 	let sortedArray = mergeSort(nums1.concat(nums2));

// 	for(let i = 0; i < )
// };

// function mergeSort(arr) {
// 	if (arr.length <= 1) {
// 		return arr;
// 	}

// 	let mid = Math.floor(arr.length / 2);
// 	let left = arr.slice(0, mid);
// 	let right = arr.slice(mid);

// 	return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
// 	let result = [];
// 	let l = 0;
// 	let r = 0;

// 	while (l < left && r < right) {
// 		if (left[l] < right[r]) {
// 			!left[l] ? '' : result.push(left[l]);
// 			l++;
// 		} else {
// 			!right[r] ? '' : result.push(right[r]);
// 			r++;
// 		}
// 	}

// 	return result.concat(left.slice(l)).concat(right.slice(r));
// }

let nums1 = [1, 3];
let nums2 = [2];

var findMedianSortedArrays = function (nums1, nums2) {
	//find the smallest length array
	const len1 = nums1.length;
	const len2 = nums2.length;

	//swap if len1>len2
	if (len1 > len2) return findMedianSortedArrays(nums2, nums1);

	//find high and low
	let lo = 0;
	let hi = len1;

	while (lo <= hi) {
		//find cut1 and cut2
		let cut1 = Math.floor((lo + hi) / 2);
		let cut2 = Math.floor((len1 + len2) / 2) - cut1;

		//find l1 , l2, r1, r2
		let l1 = cut1 === 0 ? Number.NEGATIVE_INFINITY : nums1[cut1 - 1];
		let l2 = cut2 === 0 ? Number.NEGATIVE_INFINITY : nums2[cut2 - 1];
		let r1 = cut1 === len1 ? Number.MAX_VALUE : nums1[cut1];
		let r2 = cut2 === len2 ? Number.MAX_VALUE : nums2[cut2];

		//loop again if l1>r2 || l2>r1
		if (l1 > r2) hi = cut1 - 1;
		else if (l2 > r1) lo = cut1 + 1;
		else {
			//return median for even and odd
			if ((len1 + len2) % 2 === 0)
				return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
			else return Math.min(r1, r2);
		}
	}
	return -1;
};

console.log(findMedianSortedArrays(nums1, nums2));

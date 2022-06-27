//LeetCode #21 Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

let list1 = [1, 2, 4],
	list2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

var mergeTwoLists = function (list1, list2) {
	let result = [...list1, ...list2];
	console.log({ result });
	for (let i = 0; i < result.length; i++) {
		for (let j = 1; j < result.length; j++) {
			if (result[j] <= result[i]) {
				[result[j], result[i]] = [result[i], result[j]];
			}
		}
	}

	return result;
};

console.log(mergeTwoLists(list1, list2));

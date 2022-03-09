// In an array find if two numbers add up to the sum.

function findTwoNumbers(sum, arr) {
	const obj = {};

	let curr;
	for (let i = 0; i < arr.length; i++) {
		curr = arr[i];
		if (obj[sum - curr]) {
			return [curr, sum - curr];
		} else {
			obj[curr] = 1;
		}
	}

	return -1;
}

// find the most common element in an array
function mostCommon(arr) {
	const obj = {};

	for (let elem of arr) {
		if (obj[elem]) obj[elem]++;
		else obj[elem] = 1;
	}

	let highest = 0,
		resultKey = null;

	for (let key in obj) {
		if (obj[key] > highest) {
			highest = obj[key];
			resultKey = key;
		}
	}

	return resultKey;
}

function mostCommon2(arr) {
	const obj = {};
	let highest = 0,
		result = null;

	for (let elem of arr) {
		if (obj[elem]) {
			obj[elem]++;
		} else {
			obj[elem] = 1;
		}
	}
}

const arr = [1, 2, 3, 4, 5, 5, 4, 4, 3, 4, 4, 4];

// make a linked list, make a method that sums up the linked list
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	prepend(value) {
		const newNode = new Node(value);

		this.length++;

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return this.length;
		}

		newNode.next = this.head;
		this.head = newNode;
		return this.length;
	}

	// getSum() {
	// 	let sum = 0;
	// 	let current = this.head;

	// 	while (current) {
	// 		sum += current.value;
	// 		current = current.next;
	// 	}

	// 	return sum;
	// }

	getSum() {
		const traverse = (node) => {
			if (!node) return 0;

			return node.value + traverse(node.next);
		};

		return traverse(this.head);
	}
}

const list = new LinkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);

console.log(list.getSum());

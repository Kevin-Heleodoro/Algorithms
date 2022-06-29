// const addTwoNumbers = function (l1, l2) {
// 	let sum = 0;
// 	let current = new ListNode(0);
// 	let result = current;

// 	while (l1 || l2) {
// 		if (l1) {
// 			sum += l1.val;
// 			l1 = l1.next;
// 		}

// 		if (l2) {
// 			sum += l2.val;
// 			l2 = l2.next;
// 		}

// 		current.next = new ListNode(sum % 10);
// 		current = current.next;

// 		sum = sum > 9 ? 1 : 0;
// 	}

// 	if (sum) {
// 		current.next = new ListNode(sum);
// 	}

// 	return result.next;
// };

const addTwoNumbers = function (l1, l2) {
	let List = new ListNode(0);
	let head = List;
	let sum = 0;
	let carry = 0;

	while (l1 || l2 || sum > 0) {
		if (l1) {
			sum += l1.val;
			l1 = l1.next;
		}

		if (l2) {
			sum += l2.val;
			l2 = l2.next;
		}

		if (sum >= 10) {
			carry = 1;
			sum -= 10;
		}

		head.next = new ListNode(sum);
		head = head.next;

		sum = carry;
		carry = 0;
	}

	return List.next;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];
// [7,0,8]
console.log(addTwoNumbers(l1, l2));

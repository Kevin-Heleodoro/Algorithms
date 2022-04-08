// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

const checkInclusion = (s1, s2) => {
	if (s1 === '' || s2 === '') return false;

	let map = new Map();

	for (let i = 0; i < s1.length; i++) {
		map.set(s1[i], map.get(s1[i]) + 1 || 1);
	}

	let start = 0,
		window = s1.length;
	let counter = map.size;

	for (let end = 0; end < s2.length; end++) {
		let current = s2[end];

		if (map.has(current)) map.set(current, map.get(current) - 1);

		if (map.get(current) === 0) counter--;

		while (counter === 0) {
			if (end - start + 1 === window) return true;
			if (map.has(s2[start])) map.set(s2[start], map.get(s2[start]) + 1);
			if (map.get(s2[start]) === 1) counter++;
			start++;
		}
	}
	return false;
};

// function longestPalindrome(string) {
// 	if (string.length <= 1) return string;

// 	let l = 0;
// 	let r = string.length - 1;

// 	while (l < r) {
// 		if (string[l] === string[r]) {
// 			let palindromeCheck = isPal(string.slice(l, r + 1));
// 			if (palindromeCheck) return string.slice(l, r + 1);
// 		}
// 		l++;
// 		r--;
// 	}

// 	return string[0];
// }

// function isPal(s) {
// 	let reversed = s.split('').reverse().join('');

// 	return s === reversed ? true : false;
// }

// let example = 'babad';

// function longestPalindrome(s) {
// 	let ll = 0,
// 		rr = 0;

// 	for (let i = 0; i < s.length; i++)
// 		for (let j of [i, i + 1])
// 			for (l = i, r = j; s[l] && s[l] === s[r]; l--, r++)
// 				[ll, rr] = r - l + 1 > rr - ll + 1 ? [l, r] : [ll, rr];

// 	return s.substring(ll, rr + 1);
// }

const longestPalindrome = function (s) {
	for (let j = s.length - 1; j >= 0; j--) {
		let i = 0;
		let k = j;

		while (k < s.length) {
			let substr = s.substring(i, k + 1);

			if (isPalindrome(substr)) return substr;
			i++;
			k++;
		}
	}
	return '';
};

function isPalindrome(str) {
	let l = 0;
	let r = str.length - 1;

	while (l < r) {
		if (str[l] !== str[r]) return false;
		l++;
		r--;
	}
	return true;
}

let example = 'cbbd';

console.log(longestPalindrome(example));

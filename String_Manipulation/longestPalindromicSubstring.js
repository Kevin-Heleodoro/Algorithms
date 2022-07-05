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

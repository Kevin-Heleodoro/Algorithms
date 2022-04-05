var reverseWords = (str) => {
	let wordArray = str.split(' ');

	for (let word in wordArray) {
		wordArray[word] = reversal(wordArray[word]);
	}

	return wordArray.join(' ');
};

const reversal = (word) => {
	let s = word.split('');

	let left = 0,
		right = s.length - 1;

	while (left < right) {
		[s[left], s[right]] = [s[right], s[left]];
		left++;
		right--;
	}

	return s.join('');
};

let s = "Let's take LeetCode contest";
// Output: "s'teL ekat edoCteeL tsetnoc"

console.log(reverseWords(s));

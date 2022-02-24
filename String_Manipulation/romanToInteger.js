// LeetCode 13. Roman to Integer


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.





// Attempt 1:
// Super ugly
const romanToInt = function(numeral) {
    let count = 0;

    for(let i = 0; i < numeral.length; i ++) {
        console.log(i)
        if(numeral[i] === 'M') count += 1000, console.log('+1000')
        if(numeral[i] === 'D') count += 500, console.log('+500')
        if(numeral[i] === 'C') {
            if(numeral[i + 1] === 'D') {
                count += 400
                console.log('+400')
                i++
                continue
            }
            if(numeral[i + 1] === 'M') {
                count += 900
                console.log('+900')
                i++
                continue
            }
            else count += 100, console.log('+100')
        }
        if(numeral[i] === 'L') count += 50, console.log('+50')
        if(numeral[i] === 'X') {
            if(numeral[i + 1] === 'L') {
                count += 40
                i++
                console.log('+40')
                continue
            }
            if(numeral[i + 1] === 'C') {
                count += 90
                i++
                console.log('+90')
                continue
            }
            else count += 10, console.log('+10')
        }
        if(numeral[i] === 'V') count += 5, console.log('+5')
        if(numeral[i] === 'I') {
            if(numeral[i + 1] === 'V') {
                count += 4
                i++
                console.log('+4')
                continue
            } 
            if(numeral[i + 1] === 'X') {
                count += 9
                i++
                console.log('+9')
                continue
            }
            count ++, console.log('+1')
        }
    }
    return count;
}



// let s = 'III' // 3
// let s = 'IV' // 4
// let s = 'XIV' // 14
// let s = 'LVIII' // 58
// let s = 'MCMXCIV' // 1994
// let s = 'CML' // 950
let s = "MCDLXXVI" // 1476

console.log(romanToInt(s))




// Courtesy of garyguan0713 https://leetcode.com/problems/roman-to-integer/discuss/326345/Simple-JavaScript-Solution-Easy-Understanding 
const symbols = {
	"I":1,
	"V":5,
	"X":10,
	"L":50,
	"C":100,
	"D":500,
	"M":1000
}

const romanToInt2 = function(s) {
	let value = 0;

	for(let i = 0; i < s.length; i++){
		symbols[s[i]] < symbols[s[i + 1]] ? value -= symbols[s[i]] : value += symbols[s[i]]
	}

	return value
}

console.log(romanToInt2(s))



// Courtesy of sgallivan https://leetcode.com/problems/roman-to-integer/discuss/1074149/JS-Python-Java-C%2B%2B-or-Switch-Dictionary-Solution-w-Explanation-or-beats-100
const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

var romanToInt3 = function(S) {
    let ans = 0
    for (let i = S.length-1; ~i; i--) {
        let num = roman[S.charAt(i)]
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};

console.log(romanToInt3(s))
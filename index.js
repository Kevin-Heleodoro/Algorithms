// // Merge Sort


// const arr = [1,2,3,4,5,10] // -> 0
// const arr = [2,1,3] // -> 1

// function largestCountValue(a) {
//     if(a.length === 1) return a;

//     let mid = Math.floor(a.length / 2);
//     let left = a.slice(0, mid);
//     let right = a.slice(mid);

//     let result = merge(largestCountValue(left), largestCountValue(right))
//     return result.count;
// }

// function merge(left, right) {
//     let i = 0, j = 0, temp = [], count = 0;

//     while(i < left.length && j < right.length) {
//         if(left[i] > right[j]) {
//             temp.push(right[j])
//             j += 1
//             count += 1
//         } else {
//             temp.push(left[i])
//             i += 1
//         }
//     }

//     temp = [...temp, ...left.slice(i), ...right.slice(j)]
//     return {temp, count}
// }

// function largestCountValue(a) {
//     if(a.length === 0) return []

//     let counter = [0];
//     let nums = [a[a.length - 1]]

//     const bs = (target) => {
//         let start = 0;
//         let end = nums.length 
//         while(start < end) {
//             let mid = Math.floor((start + end) / 2)
//             if(target > nums[mid]) start = mid + 1
//             else end = mid
//         }
//         nums.splice(start,0,target)
//         return start
//     }

//     for(let i = a.length - 2; i >=0; i--) {
//         let count = bs(a[i]);
//         counter.unshift(count)
//     }
//     return counter[0];
// }

// console.log(largestCountValue(arr))







// https:jsonmock.hackerrank.com/api/countries?name=<country>

// async function getCapitalCity(country) {
//     fetch(`https:jsonmock.hackerrank.com/api/countries?name=${country}`)
//     .then(res => res.json())
//     .then(parsedResult => {
//         if(!parsedResult.data) return -1;
//         return parsedResult.data["capital"]
//     })
// }

// const arr = [-5,4,-2,3,1,-1,-6,-1,0,5] // -> starting step 8
// const arr = [1,-4,-2,3] // -> starting step 6

// function findLowestStair(jumps) {
//     let startStep;
//     let currentStep = 1;

//     for(let i = 0; i < jumps.length; i++) {
//         if(currentStep < 1) {
//             currentStep++
//             i = 0
//         }
//         if(jumps[i] > 0) currentStep += jumps[i]
//         if(jumps[i] < 0) currentStep -= Math.abs(jumps[i])
//     }
//     startStep = currentStep
//     return startStep
// }

// function findLowestStair(jumps) {
//     let start = 0
//     let goodStart = false;

//     while(!goodStart) {
//         ++start
//         goodStart = checkSteps(jumps, start)
//     }

//     return start - 1;
// }

// function checkSteps(arr, step) {
//     for(let i = 0; i < arr.length; i++) {
//         if (step > 1) {
//             arr[i] > 0 ? step += arr[i] : step -= Math.abs(arr[i])
//         }
//         else return false;
//     }
//     return true;
// }

// console.log(findLowestStair(arr));


// let s = 'III' // 3
// let s = 'IV' // 4
// let s = 'XIV' // 14
// let s = 'LVIII' // 58
// let s = 'MCMXCIV' // 1994
// let s = 'CML' // 950
let s = "MCDLXXVI" // 1476


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

console.log(romanToInt(s))
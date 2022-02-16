// Write an algo that given an array and a num, 
// splits the array into subarrays of length = num.

const arr = [1,2,3,4,5,6,7,8]

// Attempt 1 -> FAIL
// function splitter(arr, num) {
//     const resultArr = []
//     let currentArr = []
//     let count = 0

//     while(count !== num) {
//         if(currentArr.length < num) currentArr.push(arr[count])
//         resultArr.push(currentArr)
//         currentArr = []
//         count++
//     }

//     return resultArr
// }


// Credit goes to Isaias.
function splitter(arr, num) {
    const resultArr = []
    for(let i = 0; i <= arr.length; i += num){
        resultArr.push(arr.slice(i, i + num))
    }
    return resultArr
}

console.log(splitter(arr, 3)) // -> [[1,2,3], [4,5,6], [7,8]]
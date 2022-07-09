const perf = require('execution-time')();


function doublerAppend(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums) {

    let new_nums = [];

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Double Insert = 814.977858 ms
// Double Append = 3.473936 ms

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

// timing results for different sized arrays:
// tinyArray:
perf.start();
doublerAppend(tinyArray);
let tinyArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(tinyArray);
let tinyArrayResultsInsert = perf.stop();

console.log('Results for the tinyArray');
console.log("insert", tinyArrayResultsInsert.preciseWords);
console.log("append", tinyArrayResultsAppend.preciseWords);

// smallArray
perf.start();
doublerAppend(smallArray);
let smallArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(smallArray);
let smallArrayResultsInsert = perf.stop();

console.log('Results for the smallArray');
console.log("insert", smallArrayResultsInsert.preciseWords);
console.log("append", smallArrayResultsAppend.preciseWords);

// mediumArray
perf.start();
doublerAppend(mediumArray);
let mediumArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(mediumArray);
let mediumArrayResultsInsert = perf.stop();

console.log('Results for the mediumArray');
console.log("insert", mediumArrayResultsInsert.preciseWords);
console.log("append", mediumArrayResultsAppend.preciseWords);

// largeArray
perf.start();
doublerAppend(largeArray);
let largeArrayResultsAppend = perf.stop();

perf.start();
doublerInsert(largeArray);
let largeArrayResultsInsert = perf.stop();

console.log('Results for the largeArray');
console.log("insert", largeArrayResultsInsert.preciseWords);
console.log("append", largeArrayResultsAppend.preciseWords);
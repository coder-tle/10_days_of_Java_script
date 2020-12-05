// 'use strict';

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((a, b) => { return a + b }, -15);

// console.log('Array:', arr);
// console.log('Sum:', sum);


// Theory

// array1.reduce()
// The reduce() method reduces the array to a single value.

// The reduce() method executes a provided function for each value of the array (from left-to-right).

// The return value of the function is stored in an accumulator (result/total).

// Note: reduce() does not execute the function for array elements without values.

// Note: This method does not change the original array.


// array1.map() : 
// The map() method creates a new array with the results of calling a function for every array element.

// array1.filter() : 
// e.g. array1 = [ 1,2 ,3 4, 5]
// to find all elements having value greater than 3
// We, can use filter function to filter out the values
// e.g. array1.filter( a => a>3;)
// The filter() method creates an array filled with all array elements that pass a test (provided as a function).
// Note: filter() does not execute the function for array elements without values.

// Note: filter() does not change the original array.
// so, to modify the array content we can make use of array.map() function

const arr = [1, 2, 3, 4, 5];
const oddValue = arr.filter(function(a) {
    if(a%2 === 1)
    {
        var a2 = a*2;
        return a2;
    }
    else
    {
        var a3 = a*3;
        return a3;
    }   
});

console.log('Array:', arr);
console.log('Odd value :', oddValue);


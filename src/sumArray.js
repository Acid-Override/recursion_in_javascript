// Given an array of integers, write a recursive function
// that returns the sum of all itegers in the array.

// This type of problem is often solved using looping/iteration,
// but can also be solved recursively. If you want, you can
// first solve the problem using a loop and then refactor
// to use recursion.

// Remember to create a base case/exit condition to prevent
// a stack overflow.

// Examples:

// sumArray([10, 20]) => 30
// sumArray([2, 4, 6, 8]) => 20
// sumArray([1, 2, 3, 4, 5]) => 15


var sumArray = function (arr) {
  // Your code here
  // var sum = 0;
  // for (let e of arr) {
  //   sum += e;
  // }
  // return sum;

  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sumArray(arr.slice(1));
  }

};

var result = sumArray([10, 20, 30, 40, 50]);
//console.log(result);



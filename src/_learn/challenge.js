// Given a sorted array, with possibly duplicates elements.
// Find the indexes of first and last occurrences of a target
// element or return -1 if the target is not found

function getRange(arr, target) {
  return [arr.indexOf(target), arr.lastIndexOf(target)]; //by one line of code
    // for (let el of arr) {
    //   if (el === target) {
    //     solutionArray[0] = arr.indexOf(el);
    //     solutionArray[1] = arr.lastIndexOf(el);
    //     break;
    //   } else {
    //     solutionArray[0] = solutionArray[1] = -1;
    //   }
   // }
   // return solutionArray;
}
//test program
arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
x = 2;
console.log(getRange(arr, x));    //[1, 4]

arrA = [1,3,3,5,7,8,9,9,9,15];
a = 9;

arrB = [100, 150, 150, 153];
b = 150;

arrC = [1,2,3,4,5,6,10];
c = 9;

console.log(getRange(arrA, a));   //[ 6, 8 ]
console.log(getRange(arrB, b));   //[ 1, 2 ]
console.log(getRange(arrC, c));   //[ -1, -1  ]

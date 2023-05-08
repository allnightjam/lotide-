const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array){
    const mid = array.length / 2;     // takes the array and cuts it down to half
    if (array.length % 2 === 1) {     // if the array length divided by 2 has a reminder of one (an odd)
      let newArray = array[Math.floor(mid)]     // it takes the array and returns the mid 
      console.log (newArray); 
    } else {
      let newArray = [     // else if takes the mid - 1 or the one previous the mid and the mid
        array[mid - 1],
        array[mid]
      ];
      console.log (newArray);
  }
}


// console.log
  // // for (const arra of array){
  //   let newArray = array[Math.floor(array.length / 2)]; 
  //   // if (arra % 2 === 0) {
  //       // newArray.push(arra);
  //   return newArray;
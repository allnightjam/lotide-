const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2) === false) {
    console.log("the arrays are different");
  } else {
    console.log("the arrays are the same");
  }
}


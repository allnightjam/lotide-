const words = ["ground", "control", "to", "major", "tom"];
// an array to map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
// a callback function
const results1 = map(words, word => word[0]);
console.log(results1);

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
const eqArrays = function(array1, array2){
  if (array2.length !== array1.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
  if (array1[i] !== array2[i]){
      return false;
    }
} return true;
}


const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2) === false) {
    console.log("the arrays are different");
  } else {
    console.log("the arrays are the same");
  }
}


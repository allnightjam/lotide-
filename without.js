const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2) === false) {
    console.log("the arrays are different");
  } else {
    console.log("the arrays are the same");
  }
}
assertArraysEqual([1, 2], [1, 2, 3]);

// check if items and source are false (different in length)
// check th
const without = function(source, itemsToRemove){
  let newArray = [];
  for (const sourc of source) {
      if (!itemsToRemove.includes(sourc)) {
      newArray.push(sourc);
      }
  } console.log(newArray);
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
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
middle([1, 2, 3, 4, 5, 6])

// console.log
  // // for (const arra of array){
  //   let newArray = array[Math.floor(array.length / 2)]; 
  //   // if (arra % 2 === 0) {
  //       // newArray.push(arra);
  //   return newArray;
// const eqArrays = function(array1,array2){
//   if (array1.length !== array2.length){
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++){
//   if (array1[i] !== array2[i]){
//       return false;
//     }
// } return true;
// }

// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
//   }
// };

const eqObjects = function(object1, object2) {
  let newObject1 = Object.keys(object1);
  let newObject2 = Object.keys(object2);
  if (newObject1.length !== newObject2.length){
    let equal = false;
    console.log(equal);
  } else {
    equal = true;
    for (const keyname of newObject1){
      if (Array.isArray(object1[keyname]) && Array.isArray(object2[keyname])) {
        if (!eqArrays(object1[keyname], object2[keyname])){
        equal = false;
        console.log(equal);
        }
      } else if (object1[keyname].constructor === "Object" && object2[keyname].constructor === "Object"){ // object.isobject or .constructor instead typeof is an issue cuz somethings in JS are considered objects even though they arent (like an array)
        if (!eqObjects(object1[keyname, object2[keyname]])){
          equal = false;
          console.log(equal);
        }
      } else if (object1[keyname] !== object2[keyname]) {
          equal = false;
          console.log(equal);
      }
    } return equal;
  }
      }
const ab = { a: "1", b: "2" };
const abc = { a: "1", b: "2"};
const bc = { a: "2", b: "3"}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) { // returns true or false and doesn't equal anything just passes stuff
      console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}  === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}  !== ${inspect(expected)}`);
    } 
};
assertObjectsEqual(ab, bc); // expect an assertion pass or fail 

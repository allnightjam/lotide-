const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++){
    if (results[sentence[i]]){
      results[sentence[i]].push(i);
    }else {
    results[sentence[i]] = [i];
  } 
  }
  return results;
};

console.log(letterPositions("hello"));

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
// const assertArraysEqual = function(array1, array2){
//   if (eqArrays(array1, array2) === false) {
//     console.log("the arrays are different");
//   } else {
//     console.log("the arrays are the same");
//   }
// }
// assertArraysEqual(letterPositions("hello").e,[1])
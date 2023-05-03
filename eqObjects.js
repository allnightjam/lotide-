const eqArrays = function(array1,array2){
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
  if (array1[i] !== array2[i]){
      return false;
    }
} return true;
}

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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
      } else if (typeof object1[keyname] === "object" && typeof object2[keyname] === "object"){
        if (!eqObjects(object1[keyname, object2[keyname]])){
          equal = false;
          console.log(equal);
        }
      } else if (object1[keyname] !== object2[keyname]) {
          equal = false;
          console.log(equal);
      }
    }console.log(equal);
  }
      }
    
const shirtObject = { color: "red", size: "medium" };

const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject);

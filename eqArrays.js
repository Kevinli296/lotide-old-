const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`⛔⛔⛔ Assertion Failed: [${actual}] !== [${expected}]`);
    }
  
  };
  
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual("Lighthouse", "Lighthouse");
  assertEqual("Lighthouse", "Labs");
  assertEqual(8, 8);
  assertEqual(8, 10);
  
  //implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match
  //use assertEqual to write test cases for various scenarios
  //assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  
  function arrayCompare(arr1, arr2) {
    var check; 

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        check = true;
      } else {
        check = false;
        break;
      }
    }
    return check;
  }
  
  assertEqual(arrayCompare([1, 2, 3], [1, 2, 3]), true); // true
  assertEqual(arrayCompare([1, 2, 3], [1, 2, 4]), true); // false
  assertEqual(arrayCompare([1, 2, 3], [1, 2, 4]), false); // true
  assertEqual(arrayCompare([1, 2, 3], [1, 1, 3]), true); // false
  assertEqual(arrayCompare([1, 2, 3], [1, 1, 3]), false); // true
  assertEqual(arrayCompare([1, 2, 3], [1, 2, "3"]), true); // false
  assertEqual(arrayCompare([1, 2, 3], [1, 2, "3"]), false); // true
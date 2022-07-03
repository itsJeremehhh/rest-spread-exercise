//im taking the exercises and the first code is my own attempt and comparing it to the answer they are looking for so i can see how far away i was from the answer.

//Problem 1
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  //make the above code in an es2015 version with a rest operator and arrow function

  function filterOutOdds() {
    const nums = array.prototype.slice.call(arguments);
    return nums.filter((num) => num % 2 === 0 );
  }

  //the solution provided\\
  const filterOutOdds = (...args) => args.filter(v => v % 2 ===0)

//Problem 2

  //findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.
const findMin = (...args) => args.reduce(args, nexVal => args.Math.min(...num), undefined)

//the sollution provided\\
const findMin = (...args) => Math.min(...args)

//Problem 3

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2);
const newObjects =({...mergeObjects});

//solution\\
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//problem 4

//write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function shouild return a new array with the orriginal array values and all of the additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => ( a * 2 , b * 2)

//solution \\
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]

//problem 5 

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!
// Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    items.filter((...items) => )
} //honestly have no idea on how to approach this problem

//solution\\
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  
  /** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    const extend2 = (array1, array2) => {
        return [...array1, ...array2]; 
    }
}

//solution\\
const extend = (array1, array2) => {
    return [...array1, ...array2];
  }

  /** Return a new object with all the keys and values
from obj and a new key/value pair */
function addKeyVal(obj, key, val) {
    const newObj = {...obj } => {
        return {...obj, ...key, ...val}
    }
}

//solution\\
let newObj = { ...obj }
newObj[key] = val;
return newObj;

/** Return a new object with a key removed. */
function removeKey(obj, key){
    let newObj = {...obj }
    if(newObj[key] = key);{
    return newObj.remove(key)
    }
}

//solution\\
let newObj = { ...obj }
delete newObj[key]
return newObj;

/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
    let newObj = combine.map((...obj1, ...obj2) => newObj);
}

//solution\\
const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

  /** Return a new object with a modified key and value. */
  function update(obj, key, val) {
    const newObj = {...obj} => {
        if(obj[key] = val)
            obj[key] = val;
    }
    return newObj;
  }

  //solution\\
  let newObj = { ...obj }
  newObj[key] = val;
  return newObj;

  //Clearly im somewhat in the ball park but still having trouble with the syntax or laying out the logic of making the code work. 
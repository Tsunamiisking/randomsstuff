const obj = {"a": null, "b": [false, 1]}

function compactObj(paramObj) {
    // Object.keys(paramObj).map((key) => console.log(key))
   const newArr =  Object.keys(paramObj).filter((key) => Boolean(paramObj[key]) === true)
   
   return newArr;
}

console.log(compactObj(obj))
// Understanding the core difference between "for in" and "for of"
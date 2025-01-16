// var createCounter = function (n) {
//     const value = n
//     return () => n
// };


// const counter = createCounter(10)
// counter()
// counter()
// counter()

var createCounter = function (n) {
    let value = n
    return () => value++
  };
  
  
  const counter = createCounter(10)
  counter()
  counter()
  counter()
  
  // So i solved this with brute force, trying multiple ways to make sure it worked.. i got to this solution with something i learnt a log time ago with javascript
  // at first call the value with the "++" still remains the same but on the second call the "++" increment has occured so the value has changed.. i will optimize this in my leetcode
//   returning n++ instead.
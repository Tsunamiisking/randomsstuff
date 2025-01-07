const testArray = [3 , 5, 6, 3 , 8, 5, 2, 9, 9, 7, 4, 0]

// Array.from

// let items = Array.from('Hello World', (x) => x + ' ');                                                                                                                                                                                 
// console.log(items.toString())



// Array.from  + Array.keys

// let newArr = Array.from(testArray.keys(), e => `Value : ${testArray[e]} index: ${e}`)
// console.log(newArr);


//  Array.entries

// let newArr = Array.from(testArray.entries());
// console.log(newArr)
// for (let item of testArray.entries()) {
//     console.log("Value", item[0])
// }



//  Array.toLocaleString() + .map() + .join() 

// let newArr = testArray.map( e => e.toLocaleString(
//     'en-NG',
//     {
//         style: 'currency',
//         currency: 'NGN'
//     }
// ))
// console.log(newArr.join('\n'))

// for in, for of
// for( item in testArray) {
//     console.log("For in loop over Array value:  " + item) // This lopps over the indecies in an Array, and in objects it iterates over the keys
// }

// for( item of testArray) {
//     console.log("For of loop over Array value:  " + item) // This lopps over the values of an array
// }

// 


//  Array.every() and Array.some()\
let spaceArray = new Array(10)
let newArr = [...testArray, ...spaceArray]
console.log(testArray.some(num => num != null))
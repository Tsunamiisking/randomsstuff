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


//  Array.toLocaleString() + .map() + .join() 

let newArr = testArray.map( e => e.toLocaleString(
    'en-NG',
    {
        style: 'currency',
        currency: 'NGN'
    }
))


console.log(newArr.join('\n'))
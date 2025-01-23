// var cancellable = function(fn, args, t) {
//     return () => setTimeout(() => console.log(fn(...args)), t)

//  };


// const testFunc = (x) => x * 2;


// const food2 = cancellable(testFunc, [2], 50);

// setTimeout(food2, 20)



const EmpObj = {
    name: "Allen",
    food: "Run"
}
const EmpArr = [null, false, 0]
const isEmpty = (obj) => {
    for (const index in obj) {
        if (JSON.stringify(index)) return true
    }
    return false
}

// console.log(isEmpty(EmpObj))
console.log(isEmpty(EmpArr))
// console.log(Boolean(EmpObj[0]))
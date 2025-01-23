var cancellable = function(fn, args, t) {
    return () => setTimeout(() => console.log(fn(...args)), t)

 };


const testFunc = (x) => x * 2;


const food2 = cancellable(testFunc, [2], 50);

setTimeout(food2, 20)


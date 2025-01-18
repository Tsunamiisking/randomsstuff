var map = function (arr, fn) {
  const newArr = [];
  for (const index in arr) {
    if (index) newArr[index] = fn(arr[index]);
  }
  return newArr;
};

function plusone(n) {
  return n + 1;
}

console.log(map([6, 6, 7, 3, 3], plusone));
// console.log(map([6, 6, 7, 3, 3]))

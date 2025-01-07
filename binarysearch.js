const arr = [ 1, 2, 3, 4, 5, 6]

const sliceArray = (arr, n, m) => {
    if (arr.length === 1){
        return arr;
    }
    return arr.slice(n, m);

}
const middle = (arr) => {
    if (arr.length % 2 === 0) {
        return arr.length / 2
    }
    return (arr.length + 1) / 2

}
const binarySearch = (numArr, value) => {
    let refreshArr;
    let middleNum = numArr[middle(numArr)]

    while (numArr.length !== 0) {
            if (value === middleNum) {
                console.log(`Found ${value}`)
                return;
            }
            else if (value < middleNum) {
                refreshArr = sliceArray(numArr, 0, middle(numArr))
                numArr = refreshArr
                middleNum = numArr[middle(numArr) - 1]
            }
            else if (value > middleNum) {
                refreshArr = sliceArray(numArr, middle(numArr), numArr.length)
                numArr = refreshArr
                middleNum = numArr[middle(numArr) - 1 ]
            }
    
            else {
                console.log('Not Found')
                return;
            }
        
    } 
    
}

binarySearch(arr, 1)
binarySearch(arr, 2)
binarySearch(arr, 3)
binarySearch(arr, 4)
binarySearch(arr, 5)
binarySearch(arr, 6)

// console.log(arr.slice(0, 4))
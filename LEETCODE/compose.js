
// This passed a few test cases but was not technically correct because i had to run fn(x) from the last item in the array to the first
// var compose = function(functions) {
    
//     return (x) => {
//         for (const element of functions) {
//             x = element(x)
//         }
//         return x;
//     }
// };


// With the reverse()
var compose = function(functions) {
    
    return (x) => {
        for (const element of functions.reverse()) {
            x = element(x)
        }
        return x;
    }
};



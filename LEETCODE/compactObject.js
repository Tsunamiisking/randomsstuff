const obj = {"a": null, "b": [false, 1]}

const randArr = [9, "Beast"]
// console.log(randArr.isEmpty())

// function compactObject(obj) {
//     const stack = [[obj, Array.isArray(obj) ? [] : {}]];
//     let newObj = stack[0][1];
//     console.log(newObj)
//     while (stack.length > 0) {
//         const [currObj, newCurrObj] = stack.pop();

//         for (const key in currObj) {
//             const val = currObj[key];

//             if (!val) continue;
            
//             if (typeof val !== 'object') {
//                 Array.isArray(newCurrObj) ? newCurrObj.push(val) : newCurrObj[key] = val;
//                 continue;
//             }

//             const newSubObj = Array.isArray(val) ? [] : {};
//             Array.isArray(newCurrObj) ? newCurrObj.push(newSubObj) : newCurrObj[key] = newSubObj;
//             stack.push([val, newSubObj]);
//         }
//     }

//     return newObj;
// }

// console.log(obj)

// Checked solution, this was a medium difficulty question.. i'll check back or check youtube to understand it better.. sigh i was dissapointed but then..
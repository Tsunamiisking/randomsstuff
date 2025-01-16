const obj = {"a": null, "b": [false, 1]}

function compactObj(paramObj) {
    // for(let item of object) {
      
    // }
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            console.log(object)

        }
    }
}

compactObj(obj)

// Understanding the core difference between "for in" and "for of"
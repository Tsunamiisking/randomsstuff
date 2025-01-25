var timeLimit = function (fn, t) {
    // Time limited version of the input function => fn
    return async function (...args) {
      const promise1 = new Promise((resolve, reject) => {
        resolve(fn(...args));
      });
  
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(resolve(fn(...args)), t);
      });
  
      return Promise.race([promise1, promise2])
        .then((e) => console.log(result))
        .catch(console.log("Time Limit Exceeded"));
    };
  };
  
  
Promise.runAll = function(promises) {
    let result = new Array(promises.length)
    let resolvedPromises = 0

    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((val) => {
                result[index] = val;
                resolvedPromises++

                if(resolvedPromises === promises.length)
                    resolve(result);
            }).catch((err) => {
                reject(err)
            })
        })
    })
}

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved-1");
    }, 1000);
  });
  
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved-2");
    }, 500);
  });
  
  let promise3 = new Promise((resolve, reject) => {
    resolve("Resolved-3")
  });
  
  const promises = [promise1, promise2, promise3];
  Promise.runAll(promises).
    then((result) => console.log(result)).
    catch((err) => console.log(err));
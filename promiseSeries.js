Promise.series = function(promises) {
    return promises.reduce((acc, curFn) => {
        return acc.then(res => {
            console.log(res)
            return curFn.then(curRes => res.concat(curRes))
        })
    }, Promise.resolve([]))
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
  Promise.series(promises).
    then((result) => console.log(result)).
    catch((err) => console.log(err));
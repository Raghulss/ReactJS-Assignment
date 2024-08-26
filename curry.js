const currySum = (x) => {
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
}

console.log(currySum(1)(2)(3))
const findIntersection = (arr1, arr2) => {
    let intersection = []
    let i=0, j=0;

    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] === arr2[j]){
            intersection.push(arr1[i])
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++
        } else {
            j++
        }
    }

    return intersection
}

let arr1 = [1,4,7,10]
let arr2 = [1,3,5,7,9,11]


console.log(findIntersection(arr1, arr2))

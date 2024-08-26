const findAnagram = (str1, str2) => {
    let s1 = str1.replace(/[^\w]/g, '').toLowerCase().split('')
    let s2 = str2.replace(/[^\w]/g, '').toLowerCase().split('')

    s1 = s1.sort().join('')
    s2 = s2.sort().join('')

    return (s1 === s2)
}

let str1 = 'Madam Curie'
let str2 = 'Radium came'
console.log(findAnagram(str1, str2))
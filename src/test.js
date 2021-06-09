// const obj = {
//     name: "Javohir",
//     age: 23
// }

// console.log(Object.keys(obj))


const names = ["Jack", "Walter", "Saul", "Dexter", "Saul"]


const index = names.findIndex(name => name === "Saul")
console.log(index)

names.splice(index, 2)
console.log(names)




// const letters = ["R", "e", "a", "c", "t"]
// let nums = [2, 5, 12, 32,3]

// const word = letters.reduce((accumulator, currentLetter) => {
//     console.log(accumulator, currentLetter)
//     return accumulator + currentLetter
// }, "Epic ")

// console.log(word)

// const sum = nums.reduce((sum, num) => sum + num, 6)
// console.log(sum)
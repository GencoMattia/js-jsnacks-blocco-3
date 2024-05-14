let firstArray = []
let secondArray = []

const randomNumber = Math.floor(Math.random() * 20) + 1
const randomNumberBis = Math.floor(Math.random() * 20) + 1

let difference;

for (let i = 0; i < randomNumber; i++) {
    firstArray.push(Math.floor(Math.random() * 100) + 1)
    // console.log(firstArray)
}
for (let i = 0; i < randomNumberBis; i++) {
    secondArray.push(Math.floor(Math.random() * 100) + 1)
    // console.log(secondArray)
}

console.log(firstArray, secondArray)

if (firstArray.length === secondArray.length){
    for (let i = 0; i < randomNumber; i++) {
        firstArray.push(Math.floor(Math.random() * 100) + 1)
    
    }
    for (let i = 0; i < randomNumber + 5; i++) {
        secondArray.push(Math.floor(Math.random() * 100) + 1)
    }
}

if (firstArray.length > secondArray.length){
    difference = firstArray.length - secondArray.length
    console.log(difference)
    for (let k = 0; k < difference; k++){
        secondArray.push(Math.floor(Math.random() * 100) + 1)
    }
} else {
    difference = secondArray.length - firstArray.length
    console.log(difference)
    for (let k = 0; k < difference; k++){
        firstArray.push(Math.floor(Math.random() * 100) + 1)
    }
}

console.log(firstArray, secondArray)
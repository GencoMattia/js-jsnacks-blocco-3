// Crea due array che hanno un numero di elementi diversi. 
// Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

let firstArray = []
let secondArray = []

const randomNumber = Math.floor(Math.random() * 20) + 1
const randomNumberBis = Math.floor(Math.random() * 20) + 1

let difference;

if (firstArray.length > secondArray.length){
    difference = firstArray.length - secondArray.length
    console.log(difference)
} else {
    difference = secondArray.length - firstArray.length
    console.log(difference)
}
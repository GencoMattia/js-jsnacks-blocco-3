// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const array = [];
let sum = 0;

while(sum < 50){
    let userNumber = Number.parseInt(prompt("scegli un numero"), 10)
    if(Number.isNaN(userNumber) || userNumber >= 50 || userNumber < 1){
        userNumber = Math.round(Math.random() * 10) + 1
    } else {
        array.push(userNumber)
        sum += userNumber
    }
}
console.log(sum)
console.log(array)
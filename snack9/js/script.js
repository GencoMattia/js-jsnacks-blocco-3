// Crea un array vuoto. Chiedi fino a che l'array non ha 6 numeri all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

let array = [];
let arraySize = 6;

const userNumber = Number.parseInt(prompt("scegli un numero"), 10);


while (array.length <= arraySize) {
    if (userNumber % 2 === 1){
        array.push(userNumber)
    }
}
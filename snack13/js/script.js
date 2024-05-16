// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321

const userNumber = BigInt(prompt("Scegli un numero"))

function numberReverse(chosenNumber){
    let string = chosenNumber + "";
    let reversedString = "";

    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }

    return Number.parseInt(reversedString, 10);
}

console.log (numberReverse(userNumber))
let userNumber = Number.parseInt(prompt("Quanti elementi vuoi che contenga l'array?"), 10);
let userArray = [];

if(userNumber < 1 || userNumber > 20 || isNaN(userNumber)) {
    userNumber = Math.floor(Math.random() * 20) + 1;
    console.log("Hai inserito un valore non valido. Il numero a te assegnato è " + userNumber);
}

for(let i = 0; i < userNumber; i++) {
    userArray.push(Math.floor(Math.random() * 100) + 1);
}

for(let k = userArray.length - 5; k < userArray.length; k++) {
    console.log (userArray[k]);
}

console.log(userArray);
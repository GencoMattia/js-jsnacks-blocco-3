let userNumber = Number.parseInt(prompt("Quanti elementi vuoi che contenga l'array?"), 10)

if (userNumber < 1 || userNumber > 20 || isNaN(userNumber)) {
    userNumber = Math.floor(Math.random() * 20) + 1
    console.log("Hai inserito un valore non valido. Il numero a te assegnato è " + userNumber)
}
// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


const clientsList = [
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 37,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 45,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 89,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 12,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 19,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 105,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 44,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 55,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 61,
    },
    {
        name: "Gertrude",
        surname: "Rossore",
        age: 69,
    },
];

console.log(clientsList);

clientsList.forEach((client) => {
    if(client.age >= 18 && client.age <= 70){
        client.drivingLicense = "Idoneo alla guida"
    } else {
        client.drivingLicense = "Non idoneo alla guida"
    }
});

const cannotDriveClient = clientsList.filter((client) => {
    if(client.drivingLicense === "Non idoneo alla guida"){
        return true
    }
});

console.log(cannotDriveClient);

// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const zucchineList = [
    {
        type: "Nera",
        weight: 1,
        lenght: 12,
    },
    {
        type: "Romanesco",
        weight: 2,
        lenght: 7,
    },
    {
        type: "Fiorentino",
        weight: 3,
        lenght: 14,
    },
    {
        type: "Napoletana",
        weight: 4,
        lenght: 10,
    },
    {
        type: "Tonda",
        weight: 2,
        lenght: 4,
    },
    {
        type: "Trombetta",
        weight: 1,
        lenght: 6,
    },
    {
        type: "Pâtisson",
        weight: 5,
        lenght: 15,
    },
    {
        type: "Gialla",
        weight: 1,
        lenght: 6,
    },
    {
        type: "Rugoso friulano",
        weight: 3,
        lenght: 13,
    },
    {
        type: "Crookneck",
        weight: 1,
        lenght: 19,
    },
];
const zucchineShort = [];
const zucchineLong = [];
let weight = 0;

zucchineList.forEach((zucchina) => {
    weight += zucchina.weight
    if(zucchina.lenght <= 8){
        zucchineShort.push(zucchina);
    } else {
        zucchineLong.push(zucchina)
    }
});

console.log(weight);

console.log(zucchineShort);
console.log(zucchineLong);
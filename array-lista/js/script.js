const fruitList = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
fruitList.push ("pesca");

console.log (fruitList);

for (let i = 0; i < fruitList.length; i++) {

    // console.log(fruitList[i]);

    let checked = fruitList[i];
    if (checked === "cocomero") {
        console.log("Trovato! Devo solo preparare il cocktail.");
    }
}

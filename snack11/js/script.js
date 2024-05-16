// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const firstWord = prompt("Scegli la prima parola")
const secondWord = prompt("Scegli la seconda parola")



function longestWord(firstWord, secondWord) {
    
    if(firstWord.length === secondWord.length){
        const draw = `${firstWord} e ${secondWord} sono lunghi uguali`
        return draw
    } else if(firstWord.length > secondWord.length) {
        return firstWord
    } else {
        return secondWord
    }
    
}

console.log(longestWord())
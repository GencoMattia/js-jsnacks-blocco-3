// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

const userTImer = Number.parseInt(prompt("Quanti secondi?"));

function timerCountDown(seconds){
    seconds--;
    return seconds;
};

setInterval((userTImer * 1000), timerCountDown, userTImer);
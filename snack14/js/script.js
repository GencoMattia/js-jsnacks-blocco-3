// ! Chiedi all'utente un numero di secondi da attendere e fai partire un timer da quel momento a zero secondi, interrompendo il timer

let userTImer = Number.parseInt(prompt("Quanti secondi?"), 10);

let remaining = userTImer

function timerCountDown(seconds){
    seconds = seconds - 1;
    console.log(seconds)
};

setInterval(timerCountDown, 1000, remaining);
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Creo un prompt che chieda all'utente se pari o dispari
    //Inserisco una condizione che assegna automaticamente pari se la risposta non è accettabile


let userChoice = prompt("Scegli: pari o dispari").toLowerCase;

if ( userChoice != 'pari' || userChoice != 'dispari'){
    userChoice = 'pari';

    console.log('Non valido, facciamo che sei pari')
}

//Creo un prompt che chieda all'utente un numero da 1 a 5
    //Inserisco una condizione che rifiuta quasiasi risposta che non sia un numero da 1 a 5

let userNumber = Number.parseInt(prompt("Scegli un numero da 1 a 5 inclusi"), 10);

if (userNamber > 5 || userNumber < 1 || userNumber == isNaN) {
    userNumber = getNumber();
}

//Creo una funzione che generi un numero random da 1 a 5 per il computer

function getNumber (numero) {
    
}

//Stampo in console la somma dei due numeri

//Creo una funzione che distingua un numero pari da un numero dispari

//Stampo in console il risultato


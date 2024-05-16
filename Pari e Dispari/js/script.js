// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Creo un prompt che chieda all'utente se pari o dispari
    //Inserisco una condizione che assegna automaticamente pari se la risposta non è accettabile


let userChoice = (prompt("Scegli: pari o dispari")).toLowerCase;

const pari = 'pari';
const dispari = 'dispari;'

if ( userChoice != pari || userChoice != dispari){
    userChoice = pari;

    console.log('Non valido, facciamo che sei pari')
}

//Creo un prompt che chieda all'utente un numero da 1 a 5
    //Inserisco una condizione che rifiuta quasiasi risposta che non sia un numero da 1 a 5

let userNumber = Number.parseInt(prompt("Scegli un numero da 1 a 5 inclusi"), 10);

if (userNumber > 5 || userNumber < 1 || userNumber == Number.isNaN) {
    userNumber = getNumber(1, 5);
}

console.log(userNumber)

//Creo una funzione che generi un numero random da 1 a 5 per il computer

function getNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

pcNumber = getNumber(1, 5);
console.log(pcNumber)

//Stampo in console la somma dei due numeri

somma = userNumber + pcNumber;

console.log(somma)

//Creo una funzione che distingua un numero pari da un numero dispari

function isEven (numero) {

    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

//Stampo in console il risultato



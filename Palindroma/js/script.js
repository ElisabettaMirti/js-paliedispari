
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


//Creo una variabile con prompt in cui chiedo all'utente una parola X

//Creo una funzione con ciclo for che parte dalla fine della parola X
//Inseirsco le condizioni:
    //Se la parola a rovescio è uguale alla parola di partenza = true
    //Se la parola a rovescio è diversa = false

const parolaUser = prompt('Scrivi una parola!');


function getPalindromo (isPalindromo) {
    let parolaInvertita = '';

    for (let i = isPalindromo.length - 1; i >= 0 ; i--){
        parolaInvertita += isPalindromo[i];
    }
    if (parolaInvertita == isPalindromo){
        return true;
    } else {
        return false;
    }
}

console.log(getPalindromo(parolaUser));
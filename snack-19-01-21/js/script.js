/* 1.  Utilizzando const e/o let.
Inserire un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */

//Dichiaro la variabile fuori da ciclo altrimenti non la potrò utilizzare al di fuori dello scope
// ed uso let altrimenti non potro assegnare un successivo valore;
let numero;

// Faccio inserire un numero all'utente e controllo che non si vuoto il campo;
do {
    numero = parseInt(prompt('Inserisci un numero'));
} while (isNaN(numero));

// Uso una variabile costante perchè il successivo è sempre +1, non andro mai a sovrascrivere;
const successivo = numero + 1;
// Controllo se il numero è pari;
if (numero % 2 == 0) {
    document.getElementById('pari').innerHTML = 'Il numero ' + numero + ' è pari.';
} else {
    document.getElementById('successivo').innerHTML = 'Il numero non è pari ed il succesivo è: ' + successivo;
}

//---------------------------------------------------------------------------------------------------





/* 2.  Utilizzando const e/o let e template literal.
Creare due tag div con due id diversi.
Un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari
e in verde i numeri pari. */

//Funzione arrow per generare numeri casuali;
const randomNumber = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;

const array = [];
// Lascio la variabile nel ciclo perchè devo solo utilizzarla per popolare l'array;
for (let i = 0; i < 10; i++){
    let number = randomNumber(1,100);
    if (!array.includes(number)){
        array.push(number)
    } else {
        i--;
    }
}
console.log(array);

// Stampo i valori, se pari nel di verde altrimenti in quello con id rosso;
for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
        document.getElementById('verde').innerHTML +=
        `
        ${array[i]}
        `;
    } 
    else {
        document.getElementById('rosso').innerHTML +=
        `
        ${array[i]}
        `;
    }
}

//---------------------------------------------------------------------------------------------------





/* 3.  Utilizzando const e/o let.
Dare la possibilità di inserire due parole.
Verificare se le due parole hanno la stessa lunghezza.
Se hanno la stessa lunghezza, stamparle entrambe altrimenti,
stampare la più lunga delle due. */


const parolaUno = prompt('Inserisci una prima parola a tua scelta');
const parolaDue = prompt('Inserisci una seconda parola a tua scelta');
// Se volessi fare un controllo però dovrò cambiare la variabile const in let e quindi:
// let parolaUno, parolaDue;
// do {
//     parolaUno = prompt('Inserisci una prima parola a tua scelta');
// } while (parolaUno == "" || parolaUno == "undefined" || !isNaN(parolaUno));

// do {
//     parolaDue = prompt('Inserisci una prima parola a tua scelta');
// } while (parolaDue == "" || parolaDue == "undefined" || !isNaN(parolaDue));

if (parolaUno.length == parolaDue.length){
    document.getElementById('uno').innerHTML = 'La prima parola è: ' + parolaUno;
    document.getElementById('due').innerHTML = 'La seconda parola è: ' + parolaDue;
} else if (parolaUno.length > parolaDue.length){
    document.getElementById('uno').innerHTML = 'La parola uno è la più lunga: ' + parolaUno;
} else {
    document.getElementById('due').innerHTML = 'La parola due è la più lunga: ' + parolaDue;
}

//---------------------------------------------------------------------------------------------------

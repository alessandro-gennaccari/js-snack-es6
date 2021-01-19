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
    console.log('Il numero è pari: ' + numero);
} else {
    console.log('Il numero non è pari il succesivo è: ' + successivo);
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


//---------------------------------------------------------------------------------------------------

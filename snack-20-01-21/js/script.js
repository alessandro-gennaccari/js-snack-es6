/* 1.  Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. */

const objects = [
    {
        nome: 'primaBici',
        peso: 250
    },
    {
        nome: 'secondaBici',
        peso: 350
    },
    {
        nome: 'terzaBici',
        peso: 150
    },
    {
        nome: 'quartaBici',
        peso: 130
    },
    {
        nome: 'quintaBici',
        peso: 310
    },
];

let pesoMinore = objects[0];
for (let i = 1; i < objects.length; i++){
    if (objects [i].peso < pesoMinore.peso){
        pesoMinore = objects[i]
    }
}

console.log(pesoMinore);

const {nome,peso} = pesoMinore;
console.log(`
    La bici:
    ${nome} pesa meno di tutte,
    con un peso di ${peso}

`);

//-------------------------------------------------------------------------------------------------------





/* 2.  Partendo da un array creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i 
due numeri inseriti dall'utente .Usiamo i nuovi metodi degli array foreach o filter.
Esempio:
const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];
Se l’utente inserisce 2 numeri: 1,4 allora selezioniamo 'Pluto', 'Paperino', 'Paperone', 'Paperina' */

const myArray = ['Pippo', 'Pluto', 'Paperino', 'Paperone', 'Paperina', 'Paperoga'];

let numero1, numero2;

do {
    numero1 = parseInt(prompt('Inserisci due numeri da 0 a 5\nInserisci il primo numero'))
}while (numero1 < 0 || numero1 > 5 || isNaN(numero1));

do {
    numero2 = parseInt(prompt('Inserisci il secondo numero'))
}while (numero2 < 0 || numero2 > 5 || isNaN(numero2));

// Faccio in modo che per la prossima condizione numero1 sia sempre minore di numero2
const scambio = numero2;
if(numero1 > numero2){
    numero2 = numero1;
    numero1 = scambio;
}

// Utilizzando forEach
// const myNewArray = [];
// myArray.forEach((e,i) => {
//     if (i >= numero1 && i <= numero2){
//         myNewArray.push(e)
//         console.log(e,i);
//     }
// });
// console.log(myNewArray);

// Utilizzando filter
const filter = myArray.filter((e,i) => {
    return i >= numero1 && i <= numero2;
});

console.log(filter);
//-------------------------------------------------------------------------------------------------------
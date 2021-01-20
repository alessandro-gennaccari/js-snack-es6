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



//-------------------------------------------------------------------------------------------------------
import { busqueda } from './data.js';

import { mostrarData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
const characters = data.characters;
const funFacts = data.funFacts;
const spells = data.spells;
const potions = data.potions;



//console.log(characters); // console: ['0', '1', '2']

//console.log(busqueda(characters));

let dataOriginal = [];
dataOriginal.push(busqueda);

let aquiEstamosGuardando = [];
aquiEstamosGuardando.push(mostrarData);

//console.log(mostrarData(characters));

const elPersonaje350 = document.getElementById("item1");
elPersonaje350.innerHTML = `<li>${id}</li>`











/*const item = document.getElementById("item1");
dataOriginal.forEach(elementos => {
    item.innerHTML = `<li>${elementos.name} </li>`
})
console.log(item);*/
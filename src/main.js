import { reduceData, houseFilter, patronusFilter } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
//en esta constante estamos guardando a los personajes en total, antes de reducirla
const characters = data.characters;

/*esta variable guarda a la data reducida, y a su vez le aplicamos la función que nos muestra 
a los personajes principales, esto lo logramos aplicando con el metodo map el cual 
nos entrega un nuevo array con la información solicitada*/
const datosPersonajesPrincipales = reduceData(characters);
//console.log(datosPersonajesPrincipales);
const showPersonajes = (datosPersonajesPrincipales) => {
    return datosPersonajesPrincipales.map(
            (gente) =>
            `<div class="contenedorDePersonajes">
            <img src="" alt=""/>
            <p>${gente.name}</p>
            <p>${gente.birth}</p>
            <p>${gente.species}</p>
            <p>${gente.house}</p>
            <p>${gente.patronus}</p>
        </div>`
        )
        .join("");

};

const cambio = document.querySelector(".primeraMuestraPersonajes");
cambio.innerHTML = showPersonajes(datosPersonajesPrincipales);
//console.log(cambio.innerHTML);

function funcionMostrarPersonajes() {
    let mostrarPrincipales = document.getElementById("loQueVoyAmostrar");
    if (mostrarPrincipales.style.display === "none") {
        mostrarPrincipales.style.display = "block";
    } else {
        mostrarPrincipales.style.display = "none";
    }
}
document.getElementById("item1").addEventListener("click", funcionMostrarPersonajes)



document.getElementById("seleccionMenuCasas").addEventListener("change", () => {
    const guardaSeleccionCasa = document.getElementById("seleccionMenuCasas").value;
    const mostrarPrimerFiltro = houseFilter(datosPersonajesPrincipales, guardaSeleccionCasa);
    console.log(mostrarPrimerFiltro);
    //console.log(guardaSeleccionCasa);
    showPersonajes(mostrarPrimerFiltro);
    //console.log(mostrarPrimerFiltro);
    const cambioDos = document.querySelector(".primeraMuestraPersonajes");
    cambioDos.innerHTML = showPersonajes(mostrarPrimerFiltro);

});
//const cambioDos = document.querySelector(".primeraMuestraPersonajes");
//cambioDos.innerHTML = showPersonajes(mostrarPrimerFiltro);
//console.log(mostrarPrimerFiltro);


const filtrandoPatronus = patronusFilter(datosPersonajesPrincipales);
console.log(filtrandoPatronus);
const showPatronus = (datosPersonajesPrincipales) => {
    return datosPersonajesPrincipales.map(
            (gente) =>
            `<div class="contenedorDePersonajes">
            <img src="" alt=""/>
            <p>${gente.name}</p>
            <p>${gente.patronus}</p>
        </div>`
        )
        .join("");

};

const cambio3 = document.querySelector(".primeraMuestraPersonajes");
cambio3.innerHTML = showPatronus(datosPersonajesPrincipales);
//console.log(cambio.innerHTML);

function funcionMostrarPatronus() {
    let mostrarPrincipales = document.getElementById("loQueVoyAmostrar");
    if (mostrarPrincipales.style.display === "none") {
        mostrarPrincipales.style.display = "block";
    } else {
        mostrarPrincipales.style.display = "none";
    }
}
document.getElementById("item2").addEventListener("click", funcionMostrarPatronus)
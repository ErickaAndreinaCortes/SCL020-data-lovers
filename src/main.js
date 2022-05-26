import { reduceData, containerInformation, showAndHideCharacters, houseFilter, patronusFilter } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
//en esta constante estamos guardando a los personajes en total, antes de reducirla
const characters = data.characters;

//esta variable guarda a la data reducida
const informationFirstCharacters = reduceData(characters);
//console.log(datosPersonajesPrincipales);

/*esta variable nos hace los cambios en el dom, el inner nos inyecta la información 
al div vacio*/
const showOne = document.querySelector(".primeraMuestraPersonajes");
showOne.innerHTML = containerInformation(informationFirstCharacters);
//console.log(cambio.innerHTML);

//este es el click que oculta y muestra a los personajes principales
document.getElementById("item1").addEventListener("click", showAndHideCharacters)



document.getElementById("seleccionMenuCasas").addEventListener("change", () => {
    const guardaSeleccionCasa = document.getElementById("seleccionMenuCasas").value;
    const mostrarPrimerFiltro = houseFilter(informationFirstCharacters, guardaSeleccionCasa);
    console.log(mostrarPrimerFiltro);
    //console.log(guardaSeleccionCasa);

    //console.log(mostrarPrimerFiltro);
    const cambioDos = document.querySelector(".primeraMuestraPersonajes");
    cambioDos.innerHTML = containerInformation(mostrarPrimerFiltro);

});
//const cambioDos = document.querySelector(".primeraMuestraPersonajes");
//cambioDos.innerHTML = showPersonajes(mostrarPrimerFiltro);
//console.log(mostrarPrimerFiltro);


const filtrandoPatronus = patronusFilter(informationFirstCharacters);
console.log(filtrandoPatronus);
const showPatronus = (informationFirstCharacters) => {
    return informationFirstCharacters.map(
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
cambio3.innerHTML = showPatronus(informationFirstCharacters);
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
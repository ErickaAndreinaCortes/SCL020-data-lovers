import { reduceData, containerInformation, showAndHideCharacters, houseFilter, patronusFilter, showPatronus, showAndHidePatronus, wandFilter, showWand, showAndHideWand } from './data.js';
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


//este metodo nos permite tomar el id y que se escuche el cambio que realice el usuario y se 
//de la condicion del filtro
document.getElementById("seleccionMenuCasas").addEventListener("change", () => {
    const saveFirstHouseSelection = document.getElementById("seleccionMenuCasas").value;
    const showfirtsfilter = houseFilter(informationFirstCharacters, saveFirstHouseSelection);
    //console.log(showfirtsfilter);
    //console.log(guardaSeleccionCasa);

    //console.log(mostrarPrimerFiltro);
    //aqui hacemos el cambio dos donde el inner inyecta al html lo que va a mostrar
    const showtwo = document.querySelector(".primeraMuestraPersonajes");
    showtwo.innerHTML = containerInformation(showfirtsfilter);

});

//esta constante guarda el filtro de los patronus
const saveFilterPatronus = patronusFilter(informationFirstCharacters);
console.log(saveFilterPatronus);


//esto inyecta al html
const showthree = document.querySelector(".primeraMuestraPersonajes");
showthree.innerHTML = showPatronus(informationFirstCharacters);
//console.log(cambio.innerHTML);


document.getElementById("item2").addEventListener("click", showAndHidePatronus)

//Lo siguiente guarda y muestra el filtro de varitas
const saveFilterWands = wandFilter(informationFirstCharacters);
console.log(saveFilterWands);


//esto inyecta al html
const showFour = document.querySelector(".primeraMuestraPersonajes");
showFour.innerHTML = showWand(informationFirstCharacters);
//console.log(cambio.innerHTML);


document.getElementById("item3").addEventListener("click", showAndHideWand)
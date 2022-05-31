import { reduceData, containerInformation, houseFilter, wandFilter, showWand, ancestryFilter, showBlood, selecSortAz, selecSortZa } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
//en esta constante estamos guardando a los personajes en total, antes de reducirla
const characters = data.characters;

//esta variable guarda a la data reducida
const informationFirstCharacters = reduceData(characters);


//este metodo nos permite tomar el id y que se escuche el cambio que realice el usuario y se 
//de la condicion del filtro
document.getElementById("seleccionMenuCasas").addEventListener("change", () => {
    const saveFirstHouseSelection = document.getElementById("seleccionMenuCasas").value;
    const showfirtsfilter = houseFilter(informationFirstCharacters, saveFirstHouseSelection);
    //aqui hacemos el cambio dos donde el inner inyecta al html lo que va a mostrar
    const showOne = document.querySelector(".primeraMuestraPersonajes");
    showOne.innerHTML = containerInformation(showfirtsfilter);

});

document.getElementById("seleccionMenuLinaje").addEventListener("change", () => {
    const saveFirstAncestrySelection = document.getElementById("seleccionMenuLinaje").value;
    const showSecondFilter = ancestryFilter(informationFirstCharacters, saveFirstAncestrySelection);
    const showTwo = document.querySelector(".primeraMuestraPersonajes");
    showTwo.innerHTML = showBlood(showSecondFilter);
});

document.getElementById("seleccionMenuVaritas").addEventListener("change", () => {
    const saveFirstWandSelection = document.getElementById("seleccionMenuVaritas").value;
    const showThreeFilter = wandFilter(informationFirstCharacters, saveFirstWandSelection);
    //aqui hacemos el cambio dos donde el inner inyecta al html lo que va a mostrar
    const showthree = document.querySelector(".primeraMuestraPersonajes");
    showthree.innerHTML = showWand(showThreeFilter);
    console.log(saveFirstWandSelection);

});

document.getElementById("seleccionMenuAlfabeticamente").addEventListener("change", () => {
    const menuSort = document.getElementById("ascendente").value;
    const organize = selecSortAz(informationFirstCharacters, menuSort);
    const showFour = document.querySelector(".primeraMuestraPersonajes");
    showFour.innerHTML = containerInformation(organize);

});

document.getElementById("seleccionMenuAlfabeticamente").addEventListener("change", () => {
    const menuSort = document.getElementById("descendente").value;
    const organizeTwo = selecSortZa(informationFirstCharacters, menuSort);
    console.log(organizeTwo);
    const showFive = document.querySelector(".primeraMuestraPersonajes");
    showFive.innerHTML = containerInformation(organizeTwo);
});
/* estas funciones son de ejemplo

export const example = () => {
    return 'example';
};

export const anotherExample = () => {
    return 'OMG';

};*/


//Esta función reduce la data original, estamos guardando los Id de los personajes en una sola variable
export const reduceData = (arrayCharacters) => {
        //console.log(arrayCharacters)
        const filterArrayForId = arrayCharacters.filter((item) => item.id ==
            "326" || item.id == "476" || item.id == "587" ||
            item.id == "472" || item.id == "473" ||
            item.id == "258" || item.id == "117" ||
            item.id == "743" || item.id == "267" ||
            item.id == "254" || item.id == "756" ||
            item.id == "744" || item.id == "123" ||
            item.id == "327" || item.id == "679" ||
            item.id == "382" || item.id == "350");
        //console.log(arrayFiltradoPorID);
        return filterArrayForId;

    }
    //esta función filtra a los personajes por sus casas, retornadonos el filtro realizado en la data reducida
export const houseFilter = (filterArrayForId, houseSelection) => {

        return filterArrayForId
            .filter((houses) => houses.house == houseSelection);

    }
    /*esta función nos filtra los patronus de cada personaje en la data reducida, 
    donde le estamos asignando dos parametros, 
    el primero es la data y el segundo es la selección que hace el usuario.*/
export const patronusFilter = (filterArrayForId, patronus) => {
    return filterArrayForId
        .filter((animal) => animal.patronus == patronus);
}


//filtro para que el usuario busque
/*export const search = (query) => {
    return characters.filter(item => {
        return item.name.includes(query);
    })
}
console.log(search('potter'));*/

//filtro para que el usuario ordene alfabeticamente
/*const ordenandoDeAz = busqueda;
ordenandoDeAz.sort((a, b) => a.name - b.name)
console.log(ordenandoDeAz);*/
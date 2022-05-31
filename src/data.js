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
    //console.log(reduceData);
    return filterArrayForId;

};
/*showChracters es la función contiene la información que queremos mostrar 
de los personajes principales, esto lo logramos aplicando con el metodo map el cual 
nos entrega un nuevo array con la información solicitada*/
export const containerInformation = (informationFirstCharacters) => {
    return informationFirstCharacters.map(
            (gente) =>
            `<div class="contenedorDePersonajes">
                <img src="" alt=""/>
                <p>${gente.name}</p>
                <p>${gente.birth}</p>
                <p>${gente.species}</p>
                <p>${gente.house}</p>
               
               
            </div>`
        )
        .join("");
};
//esta función filtra a los personajes por sus casas, retornadonos el filtro realizado en la data reducida
export const houseFilter = (filterArrayForId, houseSelection) => {
    return filterArrayForId
        .filter((houses) => houses.house == houseSelection);
};
export const showBlood = (informationFirstCharacters) => {
    return informationFirstCharacters.map((people) =>
            `<div class="contenedorDePersonajes">
                <img src="" alt=""/>
                <p>${people.name}</p>
                <p>${people.ancestry}</p>
            </div>`
        )
        .join("")
};
export const ancestryFilter = (filterArrayForId, ancestrySelection) => {
    return filterArrayForId.filter((ancestry) => ancestry.ancestry == ancestrySelection);
};
export const showWand = (informationFirstCharacters) => {
    return informationFirstCharacters.map(
            (people) =>
            `<div class="contenedorDePersonajes">
                <img src="" alt=""/>
                <p>${people.name}</p>
                <p>${people.wand}</p>
            </div>`
        )
        .join("");
};
/*esta función nos filtra las varitas de cada personaje en la data reducida, 
donde le estamos asignando dos parametros, 
el primero es la data y el segundo es la selección que hace el usuario.*/
export const wandFilter = (filterArrayForId, wandSelection) => {
    const wandFilterDos = filterArrayForId.filter(wood => wood.wand);
    let personajes = [];
    wandFilterDos.forEach((Element) => {
        console.log(Element.wand.length);
        if (wandSelection == Element.wand.match(wandSelection)) {
            personajes.push(Element)
        }
    })
    return (personajes);
};

export const selecSortAz = (informationFirstCharacters) => {
    return informationFirstCharacters.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        } else if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
};

export const selecSortZa = (informationFirstCharacters) => {
    return informationFirstCharacters.sort((a, b) => {
        if (b.name < a.name) {
            return -1;
        } else if (b.name > a.name) {
            return 1;
        }
        return 0;
    });
}
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

    }
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

/*Esta función oculta y muestra los personajes
export const showAndHideCharacters = () => {
        let showAndHideOne = document.getElementById("loQueVoyAmostrar"); //preguntar si esta linea puede ir aquí
        if (showAndHideOne.style.display === "none") {
            showAndHideOne.style.display = "block";
        } else {
            showAndHideOne.style.display = "none";
        }
    }*/
//esta función filtra a los personajes por sus casas, retornadonos el filtro realizado en la data reducida
export const houseFilter = (filterArrayForId, houseSelection) => {

    return filterArrayForId
        .filter((houses) => houses.house == houseSelection);

}

/*esta función nos filtra las varitas de cada personaje en la data reducida, 
donde le estamos asignando dos parametros, 
el primero es la data y el segundo es la selección que hace el usuario.*/
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
export const wandFilter = (filterArrayForId, wandSelection) => {
    console.log(wandSelection);
    console.log(filterArrayForId);
    const wandFilterDos = filterArrayForId.filter(wood => wood.wand);
    let personajes = [];
    wandFilterDos.forEach((Element) => {
        console.log(Element.wand.length);
        if (wandSelection == Element.wand.match(wandSelection)) {
            personajes.push(Element)
        }
    })
    return (personajes);
}






export const selecSortAz = (informationFirstCharacters) => {

    return informationFirstCharacters.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

};


/*preguntar si puede quedar sin parametro de entrada
export const showAndHidePatronus = () => {
    let showAndHidetwo = document.getElementById("loQueVoyAmostrar");
    if (showAndHidetwo.style.display === "none") {
        showAndHidetwo.style.display = "block";
    } else {
        showAndHidetwo.style.display = "none";
    }
}


//funcion que filtra las varitas
export const wandFilter = (filterArrayForId, wand) => {
    return filterArrayForId
        .filter((wood) => wood.wand == wand);
}
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
//preguntar si puede quedar sin parametro de entrada
export const showAndHideWand = () => {
    let showAndHideThree = document.getElementById("loQueVoyAmostrar");
    if (showAndHideThree.style.display === "none") {
        showAndHideThree.style.display = "block";
    } else {
        showAndHideThree.style.display = "none";
    }
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
import { houseFilter, reduceData, ancestryFilter, containerInformation, showBlood, showWand, wandFilter, selecSortAz, selecSortZa } from '../src/data.js';
const data = [{
        "id": 326,
        "name": "Harry Potter",
        "birth": "31 July, 1980",
        "death": null,
        "species": "Human",
        "img": "http://www.leseclaireuses.com/ec_content/couv/20171213_harry-potter-coupe-facebook.jpg",
        "ancestry": "Half-blood",
        "gender": "Male",
        "hair_color": "Jet-black",
        "eye_color": "Bottle green",
        "wand": "11\", Holly, phoenix feather",
        "patronus": "Stag",
        "house": "huevo",
        "associated_groups": [
            "Potter family",
            "Weasley family",
            "Albus Dumbledore",
            "Dumbledore's Army",
            "Order of the Phoenix",
            "Hogwarts School of Witchcraft and Wizardry",
            "Gryffindor",
            "Gryffindor Quidditch team",
            "Slug Club",
            "British Ministry of Magic",
            "Auror Office",
            "Department of Magical Law Enforcement",
            "S.P.E.W.",
            "Students"
        ],
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    {
        "id": 327,
        "name": "James Potter I",
        "birth": "27 March, 1960",
        "death": "31 October, 1981 (aged 21)",
        "species": "Human",
        "ancestry": "Pure-blood",
        "gender": "Male",
        "hair_color": "Jet-black",
        "eye_color": "Hazel",
        "wand": "11\", Mahogany, unknown core",
        "patronus": "Stag",
        "house": "pepino",
        "associated_groups": [
            "Potter family",
            "Evans family",
            "Hogwarts School of Witchcraft and Wizardry",
            "Marauders",
            "Gryffindor",
            "Gryffindor Quidditch team",
            "Order of the Phoenix"
        ],
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
]

describe('tests de house filter', () => {
    it('house filter es una funcion', () => {
        expect(typeof houseFilter).toBe('function');
    });
    it('house filter debe retornar los objetos de gryffindor', () => {
        expect(houseFilter(data, "pepino")).toHaveLength(1);
    });
    it('quiero saber si pepino es un objeto', () => {
        expect(typeof houseFilter(data, "pepino")).toBe("object");
    });
    it('reduceData debe retornar una funcion', () => {
        expect(typeof reduceData).toBe('function');
    });
    it('ancestryFilter es una funcion', () => {
        expect(typeof ancestryFilter).toBe('function');
    });
    it('containerInformation es una funcion', () => {
        expect(typeof containerInformation).toBe('function');
    });
    it('showBlood es una funcion', () => {
        expect(typeof showBlood).toBe('function');
    });
    it('showWand es una funcion', () => {
        expect(typeof showWand).toBe('function');
    });
    it('wandFilter es una funcion', () => {
        expect(typeof wandFilter).toBe('function');
    });
    it('selecSortAz es una funcion', () => {
        expect(typeof selecSortAz).toBe('function');
    });
    it('wandFilter debe retornar los objetos de wand', () => {
        expect(wandFilter(data, "11\", Mahogany, unknown core")).toHaveLength(1);
    });
    it('wandFilter debe retornar los objetos de wand', () => {
        expect(typeof wandFilter(data, "11\", Mahogany, unknown core")).toBe("object");
    });
    it('selecSortAz debe retornar el orden ascendente', () => {
        expect(selecSortAz(data, "name")).toEqual([{
                "id": 326,
                "name": "Harry Potter",
                "birth": "31 July, 1980",
                "death": null,
                "species": "Human",
                "img": "http://www.leseclaireuses.com/ec_content/couv/20171213_harry-potter-coupe-facebook.jpg",
                "ancestry": "Half-blood",
                "gender": "Male",
                "hair_color": "Jet-black",
                "eye_color": "Bottle green",
                "wand": "11\", Holly, phoenix feather",
                "patronus": "Stag",
                "house": "huevo",
                "associated_groups": [
                    "Potter family",
                    "Weasley family",
                    "Albus Dumbledore",
                    "Dumbledore's Army",
                    "Order of the Phoenix",
                    "Hogwarts School of Witchcraft and Wizardry",
                    "Gryffindor",
                    "Gryffindor Quidditch team",
                    "Slug Club",
                    "British Ministry of Magic",
                    "Auror Office",
                    "Department of Magical Law Enforcement",
                    "S.P.E.W.",
                    "Students"
                ],
                "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
            },
            {
                "id": 327,
                "name": "James Potter I",
                "birth": "27 March, 1960",
                "death": "31 October, 1981 (aged 21)",
                "species": "Human",
                "ancestry": "Pure-blood",
                "gender": "Male",
                "hair_color": "Jet-black",
                "eye_color": "Hazel",
                "wand": "11\", Mahogany, unknown core",
                "patronus": "Stag",
                "house": "pepino",
                "associated_groups": [
                    "Potter family",
                    "Evans family",
                    "Hogwarts School of Witchcraft and Wizardry",
                    "Marauders",
                    "Gryffindor",
                    "Gryffindor Quidditch team",
                    "Order of the Phoenix"
                ],
                "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
            },
        ]);
    });
    it('selecSortZa debe ordenar de forma descendente', () => {
        expect(selecSortZa(data, "name")).toEqual([{
                "id": 326,
                "name": "James Potter I",
                "birth": "31 July, 1980",
                "death": null,
                "species": "Human",
                "img": "http://www.leseclaireuses.com/ec_content/couv/20171213_harry-potter-coupe-facebook.jpg",
                "ancestry": "Half-blood",
                "gender": "Male",
                "hair_color": "Jet-black",
                "eye_color": "Bottle green",
                "wand": "11\", Holly, phoenix feather",
                "patronus": "Stag",
                "house": "huevo",
                "associated_groups": [
                    "Potter family",
                    "Weasley family",
                    "Albus Dumbledore",
                    "Dumbledore's Army",
                    "Order of the Phoenix",
                    "Hogwarts School of Witchcraft and Wizardry",
                    "Gryffindor",
                    "Gryffindor Quidditch team",
                    "Slug Club",
                    "British Ministry of Magic",
                    "Auror Office",
                    "Department of Magical Law Enforcement",
                    "S.P.E.W.",
                    "Students"
                ],
                "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
            },
            {
                "id": 327,
                "name": "James Potter I",
                "birth": "27 March, 1960",
                "death": "31 October, 1981 (aged 21)",
                "species": "Human",
                "ancestry": "Pure-blood",
                "gender": "Male",
                "hair_color": "Jet-black",
                "eye_color": "Hazel",
                "wand": "11\", Mahogany, unknown core",
                "patronus": "Stag",
                "house": "pepino",
                "associated_groups": [
                    "Potter family",
                    "Evans family",
                    "Hogwarts School of Witchcraft and Wizardry",
                    "Marauders",
                    "Gryffindor",
                    "Gryffindor Quidditch team",
                    "Order of the Phoenix"
                ],
                "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
            },
        ]);
    });
    it('ancestryFilter debe retornar los objetos de ancestry', () => {
        expect(typeof ancestryFilter(data, "Pure-blood")).toBe("object");
    });
    it('ancestryFilter debe retornar el largo de los linajes', () => {
        expect(ancestryFilter(data, "Pure-blood")).toHaveLength(1);
    });
    it('selecSortZa debe retornar el largo de los selector', () => {
        expect(selecSortZa(data, "Pure-blood")).toHaveLength(1);
    });



})
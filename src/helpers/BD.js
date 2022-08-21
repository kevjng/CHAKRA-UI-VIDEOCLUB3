const productos = [
    {
        id: 1,
        tipo: "SuperHeroes",
        img: "./src/img/avangers.jpg",
        nombre: "Avangers - Infinity War",
        cantidad: 1,
        precio: "$500",
    },
    {
        id: 2,
        tipo: "Infantil",
        img: "./src/img/croods.jpg",
        nombre: "Los Croods - Una nueva era",
        cantidad: 1,
        precio: "$500",
    },
    {
        id: 3,
        tipo: "Infantil",
        img: "./src/img/cruella.jpg",
        nombre: "Cruella",
        cantidad: 1,
        precio: "$700",
    },
    {
        id: 4,
        tipo: "Aventura",
        img: "./src/img/jumanji.jpg",
        nombre: "Jumanji - Siguiente Nivel",
        cantidad: 1,
        precio: "$800",
    },  
    {
        id: 5,
        tipo: "Aventura",
        img: "./src/img/jungle.jpg",
        nombre: "Jungle Cruise",
        cantidad: 1,
        precio: "$900",
    },
    {
        id: 6,
        tipo: "Infantil",
        img: "./src/img/luca.jpg",
        nombre: "Luca",
        cantidad: 1,
        precio: "$500",
    },
    {
        id: 7,
        tipo: "Suspenso",
        img: "./src/img/no respires.jpg",
        nombre: "No Respires 2",
        cantidad: 1,
        precio: "$1500",
    },
    {
        id: 8,
        tipo: "Dibujos Animados",
        img: "./src/img/paw.jpg",
        nombre: "Paw Patrol - Jet to the Rescue",
        cantidad: 1,
        precio: "$1000",
    },
    {
        id: 9,
        tipo: "Aventura",
        img: "./src/img/space.jpg",
        nombre: "Space Jam",
        cantidad: 1,
        precio: "$2500",
    },
    {
        id: 10,
        tipo: "Dibujos Animados",
        img: "./src/img/tom.jpg",
        nombre: "Tom and Jerry",
        cantidad: 1,
        precio: "$999",
    },
    {
        id: 11,
        tipo: "Infatil",
        img: "./src/img/vivo.jpg",
        nombre: "Vivo!",
        cantidad: 1,
        precio: "$500",
    },
];

export const gFetch = new Promise((res, rej) => {
    let condition = true;
    setTimeout(() => {
        if (condition) {
            res(productos);
        } else {
            rej("Error");
        }
    }, 2000);
});

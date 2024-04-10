// // // const personas = ['Juan', 'Laura', 'Patricia', 'María', 'Paula']

// // // let [,,,manzana] = personas
// // // // console.log(manzana)

// // // const Usuario = {
// // //     nombre: 'Javier',
// // //     email: 'javi@gmail.com',
// // //     registrado: true,
// // //     seguidores: ['Ger', 'Gabriel', 'Jorge', 'Rebeca', 'Xavi'],
// // //     edad:20
// // // }

// // // const {seguidores} = Usuario
// // // const [,,loquequieras] = seguidores
// // // console.log(loquequieras);

// // const Pokemon = {
// //     "count": 1126,
// //     "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
// //     "previous": null,
// //     "results": [
// //         {
// //             "name": "bulbasaur",
// //             "url": "https://pokeapi.co/api/v2/pokemon/1/"
// //         },
// //         {
// //             "name": "ivysaur",
// //             "url": "https://pokeapi.co/api/v2/pokemon/2/"
// //         },
// //         {
// //             "name": "venusaur",
// //             "url": "https://pokeapi.co/api/v2/pokemon/3/"
// //         }
// //     ]
// // }

// // const {results} = Pokemon
// // const [,,poke3] = results
// // const {url}= poke3
// // console.log(url);

// function sum(a, b, c,d) {
//     console.log("a:",a,"b:",b,"c",c,"d",d);
//   return a + b + c;
// }

// // const numbers = [1, 2, 3,4];

// // console.log(sum(...numbers));

// // const fruits = ["jamon","papafritas","alitas de pollo","donuts"]
// // const deportes = ["netflix","soffing","lol","siesta","100montaditos","levantamiento de jarra"]

// // const fruitsAndDeportes =[...fruits,...deportes]
// // console.log(fruitsAndDeportes);

// const array1 = ['patata', 'tomate', 'lechuga'];
// const array2 = [1, true, 'chocolate']

// const objeto1 = {
//     a: 10,
//     b: 'caracola'
// }

// const objeto2 = {
//     a: 2,
//     d: 'cocacola'
// }

// // const concatenarArray = [...array1, ...array2]
// // console.log(concatenarArray)

// const mergearObjeto = {...objeto1, ...objeto2}
// console.log(mergearObjeto)

const Usuario2 = {
    nombre: 'Laura',
    email: 'laura@gmail.com',
    edad: 31,
    registrado: false,
    seguidores: ['Ger', 'Gabriel', 'Angela']
}

const {edad, registrado,email, ...usuarioUtil} = Usuario2
// const {...copiaUsuario} = Usuario2 //copia de objetos
// const copiaUsuario = Usuario2
// copiaUsuario.email ="pepito"
// console.log(Usuario2)

function listarArticulos(...articulos){//operador rest
    console.log(...articulos); // operador spread
}

listarArticulos('Hola', 2, true, {a:3, c:17}, [1,2,3,4])
listarArticulos('Tarjeta de credito', 'Paragüas', 'Mochila')
listarArticulos(2)


//  Crea una función que reciba un array de nombres y devuelva un nuevo array con solo los nombres que tienen más de 5 letras usando filter.
  // Ejemplo de uso:
  // const nombres = ["Ana", "Roberto", "Juan", "Guadalupe"];
  // console.log(filtrarNombresLargos(nombres)); // ["Roberto", "Guadalupe"]

const filtrarNombresLargos = (nombres) => {

  //nombre es el nombre que le damos a cada elemento del array mientras filter lo recorre.
  return nombres.filter(nombre => nombre.length > 5);

  };

  const nombres = ["Gabriela", "Luis", "Rogelio", "Gina"]
  console.log(filtrarNombresLargos(nombres))







 // Crea una función que reciba un array de palabras y devuelva un nuevo array con solo las tres primeras palabras usando slice.
  // Ejemplo de uso:
  // const palabras = ["hola", "mundo", "javascript", "es", "genial"];
  // console.log(obtenerPrimerasPalabras(palabras)); // ["hola", "mundo", "javascript"]


const obtenerPrimerasPalabras = (palabras) => {

  return palabras.slice(0,3)

  };

  const palabras = ["hola", "mundo", "javascript", "es", "genial"];
  console.log(obtenerPrimerasPalabras(palabras))








  

// Crea una función que reciba una cadena de texto y devuelva un array con cada palabra separada usando split.
 
  // Ejemplo de uso:
  // const texto = "Programar es divertido y desafiante";
  // console.log(dividirEnPalabras(texto)); // ["Programar", "es", "divertido", "y", "desafiante"]


const dividirEnPalabras = (texto) => {

  return texto.split(" ");

  };

  const texto = "Programar es divertido y desafiante";
  console.log (dividirEnPalabras(texto))





 

 //Crea una función que reciba un array de palabras y devuelva una nueva cadena con solo las tres primeras palabras concatenadas usando slice y join.
  // Ejemplo de uso:
  // const palabras = ["Me", "gusta", "aprender", "programación"];
  // console.log(obtenerFraseCorta(palabras)); // "Me gusta aprender"
  

const obtenerFraseCorta = (palabras) => {

  return palabras.slice(0, 3).join(" ");

  };

  const palabras1 = ["Me", "gusta", "aprender", "programación"];
console.log(obtenerFraseCorta(palabras1)); // "Me gusta aprender"
  








// Dado un array de palabras, usa map para obtener un nuevo array con la primera letra de cada palabra en mayúscula.
// Ejemplo de uso:
// const palabras = ["hola", "mundo", "javascript", "programación"];
// console.log(capitalizarPalabras(palabras)); // ["Hola", "Mundo", "Javascript", "Programación"]

// "La función capitalizarPalabras toma un array de palabras (arr) y usa .map para crear un nuevo array donde cada palabra tiene su primera letra en mayúscula. Para hacer esto:

//.charAt(0) obtiene el primer carácter.
//.toUpperCase() lo convierte a mayúscula.
//.slice(1) obtiene el resto de la palabra.
//Finalmente, se concatenan ambas partes."

function capitalizarPalabras(arr) {

  return arr.map(elemento => elemento.charAt(0).toUpperCase() + elemento.slice(1));
  
}

const palabras2 = ["hola", "mundo", "javascript", "programación"];
console.log(capitalizarPalabras(palabras2));

















// Dado un array de palabras separadas por comas en un string, usa split para convertirlo en un array.

// Ejemplo de uso:
// const texto = "manzana,pera,plátano,naranja";
// console.log(convertirAArray(texto)); // ["manzana", "pera", "plátano", "naranja"]

function convertirAArray(str) {

  return str.split(",");

}

const texto1 = "manzana,pera,platano,naranja";
console.log(convertirAArray(texto1))










// Dado un array de números, usa reduce para obtener la suma total.

// Ejemplo de uso:
// const numeros = [10, 20, 30, 40, 50];
// console.log(sumarNumeros(numeros)); // 150
function sumarNumeros(arr) {

//Recorre el array arr y suma cada número (num) al acumulador (acc), 
//empezando desde 0, para obtener un único valor total.
  return arr.reduce((acc, num)=> acc + num, 0);

}

const numeros = [10, 20, 30, 40, 50];
console.log(sumarNumeros(numeros))









//  Dado un array de palabras, usa reduce para concatenarlas en una sola cadena separada por espacios.
// Ejemplo de uso:
// const palabras = ["JavaScript", "es", "un", "lenguaje", "poderoso"];
// console.log(concatenarPalabras(palabras)); // "JavaScript es un lenguaje poderoso"

function concatenarPalabras(arr) {
 
  return arr.reduce((cadena, palabra) => cadena + " " + palabra);
}

const palabras4 = ["JavaScript", "es", "un", "lenguaje", "poderoso"];
console.log(concatenarPalabras(palabras4))











// Filtra un array de palabras y devuelve aquellas que comienzan con la letra "A" (insensible a mayúsculas).
// Ejemplo de uso:
// const palabras = ["Arbol", "banana", "Avión", "perro"];
// console.log(filtrarPalabrasConA(palabras)); // ["Arbol", "Avión"]

const filtrarPalabrasConA = (palabras) => {

  return palabras.filter(palabra => palabra.slice(0, 1).toLowerCase() === "a");
 
};

const palabras5 = ["Arbol", "banana", "Avión", "perro"];
console.log(filtrarPalabrasConA(palabras5)); 











// Filtra un array de palabras y devuelve solo los palíndromos (palabras que se leen igual al revés).
// Ejemplo de uso:
// const palabras = ["Radar", "hola", "reconocer", "casa"];
// console.log(filtrarPalindromos(palabras)); // ["Radar", "reconocer"]

const filtrarPalindromos = (palabras) => {

  return palabras.filter(palabra => {
    const palabraMinusculas = palabra.toLowerCase();
    const palabraInvertida = palabraMinusculas.split("").reverse().join("");
    return palabraMinusculas === palabraInvertida;
  });
};

const palabras6 = ["Radar", "hola", "reconocer", "casa"];
console.log(filtrarPalindromos(palabras6));

  // 1. `.split("")`: Divide la cadena en un array de caracteres individuales.
  // 2. `.reverse()`: Invierte el orden de los elementos del array.
  // 3. `.join("")`: Une los elementos del array en una sola cadena de texto sin separadores.
  










// Normalizar los correos electrónicos.
// Parámetros:
// correos: Array de strings (correos electrónicos en diferentes formatos)
// Acciones:
// Convertir todos los correos a minúsculas.
// Reemplazar espacios con guiones bajos.
// Retornar la lista de correos normalizados.

const normalizarCorreos = (correos) => {

  //Para cada correo en el array correos, convierte el correo a minúsculas y reemplaza /g todos los 
  // //espacios /\s por guiones bajos (_). Devuelve un nuevo array con los correos normalizados.

  return correos.map(correo => correo.toLowerCase().replace(/\s+/g, "_"));
  
};

const correos = [
  "ejemplo@dominio.com",
  "otroEJEMPLO @dominio.com",
  "correo con ESPACIOS@dominio.com"
];
console.log(normalizarCorreos(correos));




module.exports ={ 
  filtrarNombresLargos,
  obtenerPrimerasPalabras,
  dividirEnPalabras,
  obtenerFraseCorta,
  capitalizarPalabras,
  convertirAArray,
  sumarNumeros,
  concatenarPalabras,
  filtrarPalabrasConA,
  filtrarPalindromos,
  normalizarCorreos
}
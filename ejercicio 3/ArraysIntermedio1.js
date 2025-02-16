
//  Crea una función que reciba un array de nombres y devuelva un nuevo array con solo los nombres que tienen más de 5 letras usando filter.
  // Ejemplo de uso:
  // const nombres = ["Ana", "Roberto", "Juan", "Guadalupe"];
  // console.log(filtrarNombresLargos(nombres)); // ["Roberto", "Guadalupe"]

const filtrarNombresLargos = (nombres) => {

  };
 

// Crea una función que reciba un array de palabras y devuelva un nuevo array con solo las tres primeras palabras usando slice.
  // Ejemplo de uso:
  // const palabras = ["hola", "mundo", "javascript", "es", "genial"];
  // console.log(obtenerPrimerasPalabras(palabras)); // ["hola", "mundo", "javascript"]


const obtenerPrimerasPalabras = (palabras) => {

  };
  

// Crea una función que reciba una cadena de texto y devuelva un array con cada palabra separada usando split.
 
  // Ejemplo de uso:
  // const texto = "Programar es divertido y desafiante";
  // console.log(dividirEnPalabras(texto)); // ["Programar", "es", "divertido", "y", "desafiante"]


const dividirEnPalabras = (texto) => {

  };
 

 //Crea una función que reciba un array de palabras y devuelva una nueva cadena con solo las tres primeras palabras concatenadas usando slice y join.
  // Ejemplo de uso:
  // const palabras = ["Me", "gusta", "aprender", "programación"];
  // console.log(obtenerFraseCorta(palabras)); // "Me gusta aprender"
  

const obtenerFraseCorta = (palabras) => {

  };

  

// Dado un array de palabras, usa map para obtener un nuevo array con la primera letra de cada palabra en mayúscula.
// Ejemplo de uso:
// const palabras = ["hola", "mundo", "javascript", "programación"];
// console.log(capitalizarPalabras(palabras)); // ["Hola", "Mundo", "Javascript", "Programación"]
function capitalizarPalabras(arr) {
  
}



// Dado un array de palabras separadas por comas en un string, usa split para convertirlo en un array.

// Ejemplo de uso:
// const texto = "manzana,pera,plátano,naranja";
// console.log(convertirAArray(texto)); // ["manzana", "pera", "plátano", "naranja"]

function convertirAArray(str) {

}


// Dado un array de números, usa reduce para obtener la suma total.

// Ejemplo de uso:
// const numeros = [10, 20, 30, 40, 50];
// console.log(sumarNumeros(numeros)); // 150
function sumarNumeros(arr) {

}



//  Dado un array de palabras, usa reduce para concatenarlas en una sola cadena separada por espacios.
// Ejemplo de uso:
// const palabras = ["JavaScript", "es", "un", "lenguaje", "poderoso"];
// console.log(concatenarPalabras(palabras)); // "JavaScript es un lenguaje poderoso"

function concatenarPalabras(arr) {
 
}


// Filtra un array de palabras y devuelve aquellas que comienzan con la letra "A" (insensible a mayúsculas).
// Ejemplo de uso:
// const palabras = ["Arbol", "banana", "Avión", "perro"];
// console.log(filtrarPalabrasConA(palabras)); // ["Arbol", "Avión"]

const filtrarPalabrasConA = (palabras) => {
 
};



// Filtra un array de palabras y devuelve solo los palíndromos (palabras que se leen igual al revés).
// Ejemplo de uso:
// const palabras = ["Radar", "hola", "reconocer", "casa"];
// console.log(filtrarPalindromos(palabras)); // ["Radar", "reconocer"]

const filtrarPalindromos = (palabras) => {
  
};




// Normalizar los correos electrónicos.
// Parámetros:
// correos: Array de strings (correos electrónicos en diferentes formatos)
// Acciones:
// Convertir todos los correos a minúsculas.
// Reemplazar espacios con guiones bajos.
// Retornar la lista de correos normalizados.

const normalizarCorreos = (correos) => {
  
};


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
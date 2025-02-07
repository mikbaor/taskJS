//Crea una función que determine si un número es positivo, negativo o cero.
//la funcion recibe un numero como parametro
function verificarNumero(numero) {
   
if (numero > 0) {
  return "positivo" ;
}
 else if (numero < 0) {
  return "negativo";
 }

 else if (numero === 0) {
  return "cero";
 }
 }

 verificarNumero(2);
 verificarNumero(0);
 verificarNumero(-3)










  //Crea una función que clasifique una calificación en categorías: "Aprobado", "Regular" y "Reprobado"
  // la funcion recibe una calificacion como parametro
  function clasificarCalificacion(calificacion) {

    if (calificacion >=80) { //si la calificacion es mayor > o = igual que 8
      return("Aprobado");
    }
    else if (calificacion >= 60 &&  calificacion <= 79) { //si la calificación es mayor o igual a 4 pero menor que 7
      return("Regular");
    }
    else {
      return("Reprobado");
    }

  
  }

  clasificarCalificacion(9);
  clasificarCalificacion(6);
  clasificarCalificacion(3)











  //Crea una función que determine si un número es par y positivo, impar y positivo, o negativo.
 // la funcion recibe una calificacion como parametro
  function categorizarNumero(numero) {
    if (numero < 0) {
      return("negativo");  // Si el número es negativo, imprime "Negativo"
  } else if (numero > 0) {
      if (numero % 2 === 0) {  // === compara el valor como el tipo de dato // Si el resto de dividir Num. entre 2 es igual a 0", entonces...
          return("par y positivo");
      } else {
          return("impar y positivo");  // Si el número es impar y positivo
      }
  } 
}

// Llamadas correctas a la función
categorizarNumero(4);   // Imprime: "Par y positivo"
categorizarNumero(1);   // Imprime: "Impar y positivo"
categorizarNumero(-5);  // Imprime: "Negativo"
categorizarNumero(0); 

  












  //Crea una función que reciba un número del 1 al 7 y devuelva el día correspondiente de la semana. Si el número no está en el rango, devuelve "Número inválido".
// la funcion recibe un numero del 1 al 7


  function obtenerDiaSemana(numero) {

    if (numero === 1) {//si en mi caja "numero" encuentras "1" // si lo encuentras es true, entonces {} = haz lo siguiente
    return "Lunes";
   }

   
   if (numero === 2) {
    return "Martes";
   }
   
   if (numero === 3) {
    return "Miercoles";
   }

   if (numero === 4) {
    return "Jueves";
   }

   if (numero === 5){
    return "Viernes"

   }

   if (numero === 6){
    return "Sabado"
   }

   if (numero === 7){
    return "Domingo"
   }

   else {
    return "Número inválido"
   }

  }

  console.log(obtenerDiaSemana(1));  //quiero saber a que dia corresponde el 1
  console.log(obtenerDiaSemana(5));
  console.log(obtenerDiaSemana(8))

  












  //Crea una función que reciba el código de un producto (A, B, C o D) y devuelva su categoría. Si el código no está en el rango, devuelve "Código desconocido".
  //la funcion recibe el codigo del producto como parametro
  // A = Electrónica, B = Ropa, C = Alimentos, D = Hogar
  function clasificarProducto(producto) {
   
    if (producto === 'A') {
      return "Electrónica" ;
    }

    else if (producto === 'B') {
      return "Ropa" ;
    }

    else if (producto === 'C') {
      return "Alimentos"
    }

    else {
      return "Código desconocido"
    }
}

console.log(clasificarProducto('A'));
console.log(clasificarProducto('D'))











// Crea una función que convierta una calificación numérica en una calificación por letra (A, B, C, D, F) según el siguiente criterio:

// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Menos de 60: F

// La función recibe una calificación numérica como parámetro y devuelve la calificación por letra.


function convertirCalificacion(calificacion) {
   if (calificacion >= 90 && calificacion <= 100) {
    return "A"
    }

    else if (calificacion >= 80 && calificacion <= 89) {
      return "B"
    }

    else if (calificacion >= 70 && calificacion <= 79) {
      return "C"
    }

    else if (calificacion >= 60 && calificacion <= 69) {
      return "D"
    }

    else {
      return "F"
    }
  }

  console.log(convertirCalificacion(73))
  







  



  module.exports = { verificarNumero, clasificarCalificacion, categorizarNumero, obtenerDiaSemana, clasificarProducto, convertirCalificacion   };
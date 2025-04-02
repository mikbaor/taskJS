// promiseUtils.js

/**
 * 1. Crea una función que retorne una promesa resuelta el mensaje :
 * ¡Hola, promesa cumplida!
 */
const promesaSaludo = () => {
  
  };
  
  /**
   * 2. Crea una función que retorne una promesa rechazada con un error.
   * Debe decir "Error intencional"
   */
  const promesaError = () => {

  };
  
  /**
   * 3. Crea una función que retorne una promesa que se resuelve después de un retraso.

   */
  const promesaConRetraso = (mensaje, milisegundos) => {
  
  };
  
  /**
   * 4. Crea una función que encadene dos promesas:
   *    La primera resuelve un número y la segunda multiplica ese número por 3.
   */
  const encadenarPromesas = (numero) => {
  
  };
  
  /**
   * 5. Crea una función que use Promise.all para ejecutar dos promesas en paralelo.
   * El primer promesa resuelve el mensaje "Primera"
   * El segundo promesa resuelve el mensaje "Segunda" despues de un retraso de 500ms
   */
  const promesasParalelas = () => {

  };
  
  /**
   * 6. Crea una función que use Promise.race para retornar la primera promesa que se resuelva.
   *    La primera promesa es una que se resuelve despues de 1000ms y la segunda se resuelve despues de 300ms
   *    La segunda promesa se resuelve con el mensaje "Rápida"
   *    La primera promesa se resuelve con el mensaje "Lenta"
   */
  const promesaMasRapida = () => {

  };
  
  /**
   * 7. Crea una función que retorne una promesa que se resuelve o se rechaza según el valor recibido.
   *    Si el valor es mayor a 10, la promesa se resuelve con el mensaje "El número es mayor a 10".
   *    Si el valor es 10 o menor, la promesa se rechaza con el mensaje "El número es 10 o menor".
   */
  const evaluarNumero = (numero) => {
    
  };
  
  /**
   * 8. Crea una función asíncrona que use await para esperar el resultado de una promesa.
   *  debes usar try catch
   * debes returnar el error 
   * debes usar la función promesaSaludo que se creo anteriormente
   */
  const saludarAsync = async () => {

  };

  /**
   * 9. Crea una función que combine el uso de async/await y promesas para transformar
   *     una cadena en un array de palabras luego de un retraso.
   *   debes usar try catch 
   *   debes returnar el error
   *   ejemplo de uso:
   *   const palabras = await transformarTextoAsync("Aprender promesas es divertido");
   *   console.log(palabras);
   *   debe retornar ["Aprender", "promesas", "es", "divertido"]
   */
  const transformarTextoAsync = async (texto) => {
  
  };
  
  module.exports = {
    promesaSaludo,
    promesaError,
    promesaConRetraso,
    encadenarPromesas,
    promesasParalelas,
    promesaMasRapida,
    evaluarNumero,
    saludarAsync,
    transformarTextoAsync
  };
  
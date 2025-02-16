


// la funcion recibe un array de libros (cada libro tiene un id, un titulo, un estado de prestado y una multa).
// Modificar el estado del libro con el id dado:
// Si la acción es 'prestar', el libro debe marcarse como prestado: true y su multa debe ser 0.
// Si la acción es 'devolver', el libro debe marcarse como prestado: false y se debe calcular la multa si hubo retraso.
// Si el retraso es mayor a 7 días, la multa es 2 unidades por día extra.
// Devolver el nuevo array con los libros actualizados.

//   // Ejemplo:
//   let libros = [
//     { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
//     { id: 2, titulo: "Rayuela", prestado: true, multa: 5 }
//   ];


const gestionarPrestamos = (libros, idLibro, diasRetraso, accion) => {
   
  }
  

// La funcion recibe un array de películas (cada película tiene un titulo, un array de generos y un rating).
// Filtrar las películas que contengan el género especificado y tengan un rating mayor o igual al mínimo requerido.
// Calcular el promedio del rating de las películas filtradas.
// Devolver un objeto con:
// Un array con máximo 5 películas recomendadas. nombre de la propiedad recomendaciones
// El promedio del rating de las películas recomendadas nombre de la propiedad promedio

// Ejemplo:
//   let peliculas = [
//     { titulo: "Inception", generos: ["accion", "ciencia ficcion"], rating: 8.8 },
//     { titulo: "Titanic", generos: ["drama"], rating: 7.9 }
//   ];
  const recomendarPeliculas = (peliculas, genero, ratingMinimo) => {

  }
  
  module.exports ={ 
    gestionarPrestamos,
    recomendarPeliculas
  }
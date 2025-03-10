


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

  const librosActualizados = libros.map(libro => {
    // recorremos el array de "libros" con .map y los modificaremos
    // libro.id es el libro que buscamos y "idLibro" es la lista del array
    // Si el id del libro actual no es igual al idLibro que estamos buscando
    // entonces devolvemos el libro sin hacerle ningún cambio.
    if (libro.id !== idLibro) return libro;

    // Si la acción es 'prestar'
    if (accion === 'prestar') {
      //retornamos libro del cual Quiero conservar todo lo que ya tenía el objeto, 
      // pero modificar solo algunas cosas, en este caso el estado, prestado y la mulya
      return {
        ...libro, // Mantenemos las propiedades actuales del libro
        prestado: true, // Marcamos como prestado
        multa: 0 // Reiniciamos la multa a 0
      };
    }

    // Si la acción es 'devolver'
    if (accion === 'devolver') {
      //El ? es como decir: "Si esto es cierto, haz esto
      const nuevaMulta = diasRetraso > 7 ? (diasRetraso - 7) * 2 : 0; 
      return {
        ...libro, // Mantenemos las propiedades actuales del libro
        prestado: false, // Marcamos como no prestado
        multa: nuevaMulta // Actualizamos la multa
      };
    }

    // Si la acción no es válida, devolvemos el libro sin cambios
    return libro;
  });

  return librosActualizados; // Devolvemos el nuevo array con los libros actualizados
   
  }

  // Ejemplo de uso:
let libros = [
  { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
  { id: 2, titulo: "Rayuela", prestado: true, multa: 5 }
];

// Acción: prestar el libro con id 1
console.log(gestionarPrestamos(libros, 1, 0, 'prestar'));
// Resultado:
// [
//   { id: 1, titulo: "Cien años de soledad", prestado: true, multa: 0 },
//   { id: 2, titulo: "Rayuela", prestado: true, multa: 5 }
// ]

// Acción: devolver el libro con id 2 y 10 días de retraso
console.log(gestionarPrestamos(libros, 2, 10, 'devolver'));
// Resultado:
// [
//   { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
//   { id: 2, titulo: "Rayuela", prestado: false, multa: 6 } // (10 - 7) * 2 = 6
// ]
  





















  

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

    const peliculasFiltradas = peliculas.filter(pelicula =>
      pelicula.generos.includes(genero) && pelicula.rating >= ratingMinimo
    );
    const peliculasOrdenadas = peliculasFiltradas.sort((a, b) => b.rating - a.rating);
    const recomendaciones = peliculasOrdenadas.slice(0, 5);
    const totalRating = recomendaciones.reduce((suma, pelicula) => suma + pelicula.rating, 0);
    const promedio = recomendaciones.length > 0 ? totalRating / recomendaciones.length : 0;
    return {
      recomendaciones,
      promedio
    };
  };
  
  let peliculas = [
    { titulo: "Inception", generos: ["accion", "ciencia ficcion"], rating: 8.8 },
    { titulo: "Titanic", generos: ["drama"], rating: 7.9 },
    { titulo: "The Dark Knight", generos: ["accion", "drama"], rating: 9.0 },
    { titulo: "Interstellar", generos: ["ciencia ficcion", "drama"], rating: 8.6 },
    { titulo: "Mad Max", generos: ["accion"], rating: 8.0 },
    { titulo: "Avatar", generos: ["ciencia ficcion"], rating: 7.8 }
  ];
  
  let resultado = recomendarPeliculas(peliculas, "accion", 8.0);
  console.log(resultado);











  
  module.exports ={ 
    gestionarPrestamos,
    recomendarPeliculas
  }
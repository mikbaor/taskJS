
//Crea una función que reciba un array de alumnos y clasifique a los alumnos en reprobados, aprobados, y excelentes.

// ejemplo del array que recibe la funcion
// const alumnos = [
//     { nombre: "Juan", calificacion: 5 },
//     { nombre: "Ana", calificacion: 7 },
//     { nombre: "Luis", calificacion: 10 },
//     { nombre: "María", calificacion: 9 },
//     { nombre: "Pedro", calificacion: 4 },
//   ];
  
// reprobados 5 o menos
// aprobados 6 a 9.5
// excelentes 9.5 o mas

// recibe un array de objetos de alumnos
function clasificarAlumnos(alumnos) {  // damos un nombre a nuestra funcion y RECIBE UN PARAMETRO "alumnos" que esta vacio

  const filtrarAlumnos = {reprobados: [], aprobados: [], excelentes: []} //creamos un OBJETO QUE VA A TENER 3 PROPIEDADES que son aprobados reprobados y excelentes 


  //CONDICIONALES: ESTA PARTE LLENA LOS ARRAYS (let) VACIOS DE LA PARTE SUPERIOr

  for (let alumno of alumnos) { //Para cada alumno de mi array alumnos, haz lo siguiente:

    if (alumno.calificacion <= 5) {
      filtrarAlumnos.reprobados.push(alumno); // PUSH AGREGA UN OBJETO AL FINAL DEL ARRAY, ejemplo Reprobado: Juan 5 (agrega el nombre)

    } else if (alumno.calificacion <= 9.5) {
      filtrarAlumnos.aprobados.push(alumno); // Si la calificación está entre 6 y 9.5, es aprobado

    } else {
      filtrarAlumnos.excelentes.push(alumno); // Si la calificación es mayor a 9.5, es excelente
    }
  }

  // RETORNAMOS CON LOS DATOS YA LLENADOS DE NUESTROS 3 ARRAYS QUE ESTABAN VACIOS 
  return filtrarAlumnos
    
}

// Ejemplo de uso
const alumnos = [
  { nombre: "Juan", calificacion: 5 },
  { nombre: "Ana", calificacion: 7 },
  { nombre: "Luis", calificacion: 10 },
  { nombre: "María", calificacion: 9 },
  { nombre: "Pedro", calificacion: 4 },
];

console.log(clasificarAlumnos(alumnos));













//Crea una función que reciba un array de productos con sus cantidades y devuelva un objeto 
//con los productos agotados, productos bajos en inventario (menos de 10), y productos con inventario suficiente.

// const productos = [
//     { nombre: "Laptop", cantidad: 0 },
//     { nombre: "Teclado", cantidad: 5 },
//     { nombre: "Ratón", cantidad: 15 },
//     { nombre: "Monitor", cantidad: 2 },
//   ];

//retorna un obejto con 3 propiedades agotados bajoInventario  suficienteInventario


// la funcion recibe un array de productos estos son objetos

function clasificarInventario(productos) { // "productos" es el nombre de nuestro parametro, al cual despues le daremos un argumento

  const productosExistencia = {agotados: [], bajoInventario: [], suficienteInventario: [],
  //"productosExistencia" Este OBJETO almacena tres arrays: agotados, bajoInventario y suficienteInventario
  };

  // Recorre cada producto en el array productos. Para cada producto, verifica su cantidad y lo clasifica en uno de los tres arrays.
  for (let producto of productos) {

    if (producto.cantidad === 0) {
      // Si la cantidad es 0, es un producto agotado
      productosExistencia.agotados.push(producto);

    } else if (producto.cantidad < 10) {
      // Si la cantidad es menor a 10, es un producto bajo en inventario
      productosExistencia.bajoInventario.push(producto);

    } else {
      // Si la cantidad es 10 o más, es un producto con inventario suficiente
      productosExistencia.suficienteInventario.push(producto);
    }
  }

  // Retornamos el objeto con los productos clasificados
  return productosExistencia;
}

// Ejemplo de uso:
const productos = [
  { nombre: "Laptop", cantidad: 0 },
  { nombre: "Teclado", cantidad: 5 },
  { nombre: "Ratón", cantidad: 15 },
  { nombre: "Monitor", cantidad: 2 },
];

const resultado = clasificarInventario(productos);
console.log(resultado);


















//   Crea una función que reciba un array de empleados con su nombre y departamento y 
//   devuelva un objeto donde cada clave sea un departamento y su valor, un array de empleados en ese departamento.


//const empleados = [
//     { nombre: "Carlos", departamento: "Ventas" },
//     { nombre: "Luisa", departamento: "Marketing" },
//     { nombre: "Pedro", departamento: "Ventas" },
//     { nombre: "Ana", departamento: "TI" },
//   ];


// la funcion recibe un array de empleados similar al de arriba
function organizarPorDepartamento(empleados) { //El parámetro es un array de objetos, donde c/objeto representa:
                                               // un empleado con su nombre y departamento
  
  let departamentos = {}; //Este objeto lo usaremos para guardar a los empleados agrupados por departamento. ejemplo:
  // "ventas" = nombre: carlos dpto: ventas, nombre: pedro dpto: ventas

  // 
  empleados.forEach(empleado => {
    // Para cada empleado en el array 'empleados', haz esto Toma cada empleado y ejecuta este código con él

    if (departamentos[empleado.departamento]) { //Busca si existe una propiedad en el objeto con el nombre del departamento del empleado actual.

      // Si existe, agregamos el empleado completo (con nombre y departamento)
      departamentos[empleado.departamento].push(empleado);
    } else {
      // Si no existe, creamos un nuevo array con el primer empleado
      departamentos[empleado.departamento] = [empleado];
    }
  });

  // Devolvemos el objeto con los departamentos y los empleados agrupados
  return departamentos;
}

// Ejemplo de uso con el array de empleados
const empleados = [
  { nombre: "Carlos", departamento: "Ventas" },
  { nombre: "Luisa", departamento: "Marketing" },
  { nombre: "Pedro", departamento: "Ventas" },
  { nombre: "Ana", departamento: "TI" },
];

// Llamamos a la función y mostramos el resultado
console.log(organizarPorDepartamento(empleados));




















  

  //  Crea una función que reciba un array de libros con su título
  //  y género y regrese un objeto donde cada clave sea un género y su valor sea un array de títulos.

//   const libros = [
//     { titulo: "El Principito", genero: "Ficción" },
//     { titulo: "1984", genero: "Distopía" },
//     { titulo: "El Hobbit", genero: "Fantasía" },
//     { titulo: "Dune", genero: "Ficción" },
//   ];

//la funcion recibe un array de libros similar al de arriba
  function agruparLibrosPorGenero(libros) { // libros es el nombre de nuestro parametro, el cual esta vacio y despues recibira un argumento

    let generos = {}; // Creamos un objeto vacío para almacenar los géneros y sus libros

    
    libros.forEach(libro => { //De mi objeto libros, a iras tomando 1 a 1 y haz esto:

      // Usamos .trim() para asegurarnos de que no haya espacios, 
      const genero = libro.genero.trim();
  
      // Verificamos si en el indici ya existe en el objeto "generos"
      if (generos[genero]) {
        // Si el género existe, agregamos el libro completo (con titulo y genero) al array de ese género
        generos[genero].push(({ titulo: libro.titulo, genero: libro.genero }));
      } else {
        // Si el género no existe, creamos un nuevo array con el primer libro
        generos[genero] = [{ titulo: libro.titulo, genero: libro.genero }];
      }
    });
  
    // Devolvemos el objeto con los géneros y los libros (cada libro tiene título y género)
    return generos;
  }
  
  // Ejemplo de uso con el array de libros
  const libros = [
    { titulo: "El Principito", genero: "Ficción" },
    { titulo: "1984", genero: "Distopía" },
    { titulo: "El Hobbit", genero: "Fantasía" },
    { titulo: "Dune", genero: "Ficción" },
  ];
  
  // Llamamos a la función y mostramos el resultado
  console.log(agruparLibrosPorGenero(libros));





















//   Crea una función que reciba un array de tareas con prioridad (alta, media, baja) y las clasifique en un objeto.

// const tareas = [
//     { descripcion: "Pagar facturas", prioridad: "alta" },
//     { descripcion: "Lavar ropa", prioridad: "baja" },
//     { descripcion: "Estudiar", prioridad: "media" },
//   ];

// la funcion recibe un array de tareas similar al de arriba
// el objeto que retorna tiene 3 propiedades: alta, media, baja

function ordenarTareasPorPrioridad(tareas) { //tareas es el nombre de nuestro parametro, que esta vacio, despues le daremos un argumento
    
    const tareasClasificadas = { 
      alta: [],                  
      media: [],                 
      baja: []                   
    };
  
    
    tareas.forEach(tarea => { 


      if (tarea.prioridad === "alta") {  
        tareasClasificadas.alta.push(tarea);
       

      } else if (tarea.prioridad === "media") { 
        tareasClasificadas.media.push(tarea); 

      } else if (tarea.prioridad === "baja") { 
        
        tareasClasificadas.baja.push(tarea);
      }
    });
  
    
    return tareasClasificadas; 
  }
  
 
  const tareas = [
    { descripcion: "Pagar facturas", prioridad: "alta" },
    { descripcion: "Lavar ropa", prioridad: "baja" },
    { descripcion: "Estudiar", prioridad: "media" },
  ];
  
  console.log(ordenarTareasPorPrioridad(tareas));
  




  module.exports = { ordenarTareasPorPrioridad, agruparLibrosPorGenero, organizarPorDepartamento, clasificarInventario, clasificarAlumnos };

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
function clasificarAlumnos() {

  }
  

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

function clasificarInventario() {
   
  }


//   Crea una función que reciba un array de empleados con su nombre y departamento y 
//   devuelva un objeto donde cada clave sea un departamento y su valor, un array de empleados en ese departamento.


//const empleados = [
//     { nombre: "Carlos", departamento: "Ventas" },
//     { nombre: "Luisa", departamento: "Marketing" },
//     { nombre: "Pedro", departamento: "Ventas" },
//     { nombre: "Ana", departamento: "TI" },
//   ];


// la funcion recibe un array de empleados similar al de arriba
function organizarPorDepartamento(empleados) {
  
  }
  

  //Crea una función que reciba un array de libros con su título
  //  y género y regrese un objeto donde cada clave sea un género y su valor sea un array de títulos.

//   const libros = [
//     { titulo: "El Principito", genero: "Ficción" },
//     { titulo: "1984", genero: "Distopía" },
//     { titulo: "El Hobbit", genero: "Fantasía" },
//     { titulo: "Dune", genero: "Ficción" },
//   ];

//la funcion recibe un array de libros similar al de arriba
  function agruparLibrosPorGenero(libros) {
    
  }


//   Crea una función que reciba un array de tareas con prioridad (alta, media, baja) y las clasifique en un objeto.

// const tareas = [
//     { descripcion: "Pagar facturas", prioridad: "alta" },
//     { descripcion: "Lavar ropa", prioridad: "baja" },
//     { descripcion: "Estudiar", prioridad: "media" },
//   ];

// la funcion recibe un array de tareas similar al de arriba
// el objeto que retorna tiene 3 propiedades: alta, media, baja
function ordenarTareasPorPrioridad() {
  
  }



  module.exports = { ordenarTareasPorPrioridad, agruparLibrosPorGenero, organizarPorDepartamento, clasificarInventario, clasificarAlumnos };

//Dado un array de productos, agrega un nuevo producto si no existe. Si ya existe, actualiza su inventario dependiendo de un método (add, rest, new).


// let productos = [
//     { sku: 1, nombre: "Laptop", color: "Negro", inventario: 10 },
//     { sku: 2, nombre: "Teclado", color: "Blanco", inventario: 5 },
//     { sku: 3, nombre: "Ratón", color: "Rojo", inventario: 8 },
//   ];
  

const manejarProducto = (lista, productoObjeto, metodo) => {
   
  };

//   Un array de tareas tiene propiedades como estado. Implementa una función para actualizar el estado de una tarea (pendiente, en progreso, completada).

//   let tareas = [
//     { id: 1, descripcion: "Pagar facturas", estado: "pendiente" },
//     { id: 2, descripcion: "Lavar ropa", estado: "en progreso" },
//   ];
  
  const actualizarEstadoTarea = (lista, id, nuevoEstado) => {

  };
  


//   Actualiza el salario de un empleado si ya existe. Si no existe, agrégalo a la lista.

//   let empleados = [
//     { id: 1, nombre: "Juan", salario: 3000 },
//     { id: 2, nombre: "Ana", salario: 3500 },
//   ];
  
  const manejarEmpleado = (lista, empleado) => {
 
  };
  



// Si un producto tiene menos de 5 unidades, se debe marcar como bajo inventario.

// let inventario = [
//     { id: 1, nombre: "Monitor", cantidad: 2, estado: "suficiente" },
//     { id: 2, nombre: "Teclado", cantidad: 10, estado: "suficiente" },
//   ];

const verificarInventario = (lista) => {

  };
  

  //Agrega un rol a un usuario existente o lo crea con uno nuevo.

//   let usuarios = [
//     { id: 1, nombre: "Juan", rol: "Admin" },
//     { id: 2, nombre: "Ana", rol: "Usuario" },
//   ];
  
  const asignarRol = (lista, usuario) => {
  
  };
  



  module.exports = { manejarProducto, actualizarEstadoTarea, manejarEmpleado, verificarInventario, asignarRol  };
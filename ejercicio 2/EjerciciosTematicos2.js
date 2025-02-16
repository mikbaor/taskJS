
//Dado un array de productos, agrega un nuevo producto si no existe. Si ya existe, actualiza su inventario dependiendo de un método (add, rest, new).


// let productos = [
//     { sku: 1, nombre: "Laptop", color: "Negro", inventario: 10 },
//     { sku: 2, nombre: "Teclado", color: "Blanco", inventario: 5 },
//     { sku: 3, nombre: "Ratón", color: "Rojo", inventario: 8 },
//   ];
  
// const = variable (Un espacio donde guardas un solo valor)   // manejarProducto = nombre de nuestra funcion

const manejarProducto = (lista, productoObjeto, metodo) => {
  // Buscar si el producto ya existe en la lista
  const productoExistente = lista.find(producto => producto.sku === productoObjeto.sku);

  if (productoExistente) {
    // Si el producto existe, actualizar el inventario según el método
    switch (metodo) {
      case 'add':
        productoExistente.inventario += productoObjeto.inventario;
        break;

      case 'rest':
        productoExistente.inventario -= productoObjeto.inventario;
        // Asegurarse de que el inventario no sea negativo
        if (productoExistente.inventario < 0) {
          productoExistente.inventario = 0;
        }
        break;
      case 'new':
        productoExistente.inventario = productoObjeto.inventario;
        break;
      default:
        console.error("Método no válido. Use 'add', 'rest' o 'new'.");
        break;
    }
  } else {
    // Si el producto no existe, agregarlo a la lista
    lista.push(productoObjeto);
  }

  return lista; // Devolver la lista actualizada
};

// Ejemplo de uso
let productos = [
  { sku: 1, nombre: "Laptop", color: "Negro", inventario: 10 },
  { sku: 2, nombre: "Teclado", color: "Blanco", inventario: 5 },
  { sku: 3, nombre: "Ratón", color: "Rojo", inventario: 8 },
];

// Agregar un nuevo producto
productos = manejarProducto(productos, { sku: 4, nombre: "Monitor", color: "Gris", inventario: 7 }, 'add');
console.log(productos);

// Actualizar inventario de un producto existente (sumar)
productos = manejarProducto(productos, { sku: 1, inventario: 5 }, 'add');
console.log(productos);

// Actualizar inventario de un producto existente (restar)
productos = manejarProducto(productos, { sku: 2, inventario: 3 }, 'rest');
console.log(productos);

// Actualizar inventario de un producto existente (nuevo valor)
productos = manejarProducto(productos, { sku: 3, inventario: 15 }, 'new');
console.log(productos);








//   Un array de tareas tiene propiedades como estado. Implementa una función para actualizar el estado de una tarea (pendiente, en progreso, completada).

//   let tareas = [
//     { id: 1, descripcion: "Pagar facturas", estado: "pendiente" },
//     { id: 2, descripcion: "Lavar ropa", estado: "en progreso" },
//   ];
  
//Creamos una función llamada actualizarEstadoTarea que recibe tres argumentos: lista, id y nuevoEstado
  const actualizarEstadoTarea = (lista, id, nuevoEstado) => {

    //creamos un nueva variable, que recorrera lista, c/tarea cuyo id coincida con el id
    let tareaEncontrada = lista.find(tarea => tarea.id === id);

//Si tareaEncontrada tiene un valor (es decir, si encontramos una tarea con el id proporcionado), entonces...
  if (tareaEncontrada) {
    
    //Actualizamos la propiedad estado de la tarea encontrada y le asignamos el valor de nuevoEstado
    tareaEncontrada.estado = nuevoEstado;

  } else {
    console.error("No se encontró ninguna tarea con el ID proporcionado.");
  }
};

let tarea = [
  { id: 1, descripcion: "Pagar facturas", estado: "pendiente" },
  { id: 2, descripcion: "Lavar ropa", estado: "en progreso" },
];

actualizarEstadoTarea(tarea, 1, "completada");
console.log(tarea);






















  





// Si un producto tiene menos de 5 unidades, se debe marcar como bajo inventario.

// let inventario = [
//     { id: 1, nombre: "Monitor", cantidad: 2, estado: "suficiente" },
//     { id: 2, nombre: "Teclado", cantidad: 10, estado: "suficiente" },
//   ];

const verificarInventario = (lista) => {

  lista.forEach(producto => { //con el metodo ecorremos cada elemento de mi array lista y
    // a cada elemento lo llamamos producto

    if (producto.cantidad < 5) { //si la cantidad del producto es menor a 5 

      producto.estado = "bajo inventario"; //actualiza el estado a bajo inventario

    } else { // de lo contrario
      producto.estado = "suficiente"; //actualizamos el estado del producto a 'suficiente'
    }
  });
  return lista;

  };

  let inventario = [
    { id: 1, nombre: "Monitor", cantidad: 2, estado: "suficiente" },
    { id: 2, nombre: "Teclado", cantidad: 10, estado: "suficiente" },
  ];
  
  verificarInventario(inventario);
  console.log(inventario);
  


























  //Agrega un rol a un usuario existente o lo crea con uno nuevo.

//   let usuarios = [
//     { id: 1, nombre: "Juan", rol: "Admin" },
//     { id: 2, nombre: "Ana", rol: "Usuario" },
//   ];
  
  const asignarRol = (lista, usuario) => {
  
    //creamos la variable usuarioExistente, para guardar el resultado de la busqueda id
    let usuarioExistente = lista.find(usuarioTemporal => usuarioTemporal.id === usuario.id)

    //Si usuarioExistente tiene un valor (es decir, si encontramos un usuario con el id que buscamos), entonces
    if (usuarioExistente) {
      //Actualiza el rol del usuario encontrado con el nuevo rol que proporcionamos.
      usuarioExistente.rol = usuario.rol;
    }

    else {
      lista.push (usuario)
    }
  };

  // Ejemplo de uso
let usuarios = [
  { id: 1, nombre: "Juan", rol: "Admin" },
  { id: 2, nombre: "Ana", rol: "Usuario" },
];

// Asignar un nuevo rol a un usuario existente
asignarRol(usuarios, { id: 1, nombre: "Juan", rol: "SuperAdmin" });
console.log(usuarios);

// Crear un nuevo usuario
asignarRol(usuarios, { id: 3, nombre: "Carlos", rol: "Editor" });
console.log(usuarios);
  









//   Actualiza el salario de un empleado si ya existe. Si no existe, agrégalo a la lista.

//   let empleados = [
//     { id: 1, nombre: "Juan", salario: 3000 },
//     { id: 2, nombre: "Ana", salario: 3500 },
//   ];
  
const manejarEmpleado = (lista, empleado) => { //lista es array de empleados, empleado es un objeto dentro de mi array

// creamos la variable que guardara el resultado de la busqueda de lista, .find recorre c/elemento del
//array "lista" buscando la condicion dentro de () le llamamos e. y e.id es en donde esta buscando .find
//y empleado.id es lo que yo estoy buscando ¿Este empleado que estoy revisando es el que estoy buscando?
const empleadoExistente = lista.find(e => e.id === empleado.id);

if (empleadoExistente) {
  // Si el empleado existe, actualiza su salario
  empleadoExistente.salario = empleado.salario;
} else {
  // Si el empleado no existe, agrégalo a la lista
  lista.push(empleado);
}

return lista;

};

// Ejemplo de uso:
let empleados = [
  { id: 1, nombre: "Juan", salario: 3000 },
  { id: 2, nombre: "Ana", salario: 3500 },
];

const nuevoEmpleado = { id: 3, nombre: "Carlos", salario: 4000 };
const empleadoActualizado = { id: 1, nombre: "Juan", salario: 3200 };

console.log(manejarEmpleado(empleados, nuevoEmpleado)); // Agrega a Carlos
console.log(manejarEmpleado(empleados, empleadoActualizado)); // Actualiza el salario de Juan

console.log(empleados);







  module.exports = { manejarProducto, actualizarEstadoTarea, verificarInventario, asignarRol, manejarEmpleado  };
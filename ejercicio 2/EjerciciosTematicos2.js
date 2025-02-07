
//Dado un array de productos, agrega un nuevo producto si no existe. Si ya existe, actualiza su inventario dependiendo de un método (add, rest, new).


// let productos = [
//     { sku: 1, nombre: "Laptop", color: "Negro", inventario: 10 },
//     { sku: 2, nombre: "Teclado", color: "Blanco", inventario: 5 },
//     { sku: 3, nombre: "Ratón", color: "Rojo", inventario: 8 },
//   ];
  
// const = variable (Un espacio donde guardas un solo valor)   // manejarProducto = nombre de nuestra funcion

const manejarProducto = (lista, productoObjeto, metodo) => {  //creamos nuestro array, y le damos 3 parametros 

  //Agregar un producto si no existe en el array lista.
   

    // .find busca algo especifico, creamos un nuevo array, que le ASIGNAREMOS una regla a cumplir.
    //recorre en mi parametro "lista" 1 a 1 un producto que debe cumplir la siguiente CONDICION, dentro mi objeto lista busca
    // especificamente un producto.sku que coincida con algun objeto dentro de productoObjeto
    const productoExistente = lista.find(producto => producto.sku === productoObjeto);



    if (productoExistente) {
        // Si el producto existe, actualizamos el inventario según el método
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
        // Si el producto no existe, lo agregamos a la lista
        lista.push(productoObjeto);
    }

    return lista; // Devolvemos la lista actualizada
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
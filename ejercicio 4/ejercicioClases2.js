 //Explicación :

// Propiedades :
// id: Identificador único del usuario.
// nombre: Nombre del usuario.
// email: Dirección de correo electrónico del usuario.
// Método actualizarDatos(nuevosDatos) :
// Permite actualizar el nombre o el email del usuario.
// Si nuevosDatos.nombre o nuevosDatos.email no están definidos, se conserva el valor actual (this.nombre o this.email).

class Usuario {
   
  }


//   Explicación :
// Parámetros :
// accion: Define si se quiere "crear" un nuevo usuario o "actualizar" uno existente.
// datos: Objeto con los datos necesarios (id, nombre, email) para crear o actualizar un usuario.
// usuarios: Array de usuarios ya existentes (opcional, por defecto es un array vacío).
// Lógica :
// Si accion es "crear", se crea un nuevo objeto Usuario y se agrega al array usuarios.
// Si accion es "actualizar", se busca el usuario por su id y se llama al método actualizarDatos para modificar sus propiedades.
//Ejemplo de Uso :
// let usuarios = [];
// usuarios = gestionarUsuario("crear", { id: 1, nombre: "Ana", email: "ana@example.com" }, usuarios);
// console.log(usuarios); // [{ id: 1, nombre: "Ana", email: "ana@example.com" }]

// usuarios = gestionarUsuario("actualizar", { id: 1, email: "nuevo_email@example.com" }, usuarios);
// console.log(usuarios); // [{ id: 1, nombre: "Ana", email: "nuevo_email@example.com" }]

  const gestionarUsuario = (accion, datos, usuarios = []) => {
    
  };


//   Explicación :
//   Propiedades :
//   numero: Número de la habitación.
//   capacidad: Número máximo de personas que pueden alojarse en la habitación.
//   disponible: Indica si la habitación está disponible para ser reservada (por defecto, true).
//   Método reservar() :
//   Cambia el estado de disponible a false si la habitación está disponible.
//   Retorna true si la reserva fue exitosa, o false si la habitación ya estaba ocupada.

  class Habitacion {
   
  }


//   Explicación :
//   Parámetros :
//   habitacionNumero: Número de la habitación que se desea reservar.
//   habitaciones: Array de objetos Habitacion.
//   Lógica :
//   Busca la habitación por su número usando find.
//   Si la habitación existe y está disponible, se reserva llamando al método reservar.
//   Retorna un mensaje indicando si la reserva fue exitosa o no.

//Ejemplo de Uso :
// const habitaciones = [
//     new Habitacion(101, 2),
//     new Habitacion(102, 4)
//   ];
  
//   console.log(hacerReserva(101, habitaciones)); // "Habitación 101 reservada"
//   console.log(hacerReserva(101, habitaciones)); // "Habitación no disponible"

  const hacerReserva = (habitacionNumero, habitaciones) => {
  
  };


//   Explicación :

// Propiedades :
// id: Identificador único de la tarea.
// descripcion: Descripción de la tarea.
// completada: Indica si la tarea ha sido completada (por defecto, false).
// Método marcarComoCompletada() :
// Cambia el estado de completada a true.

  class Tarea {

  }

//   Explicación :

//   Parámetros :
//   accion: Define si se quiere "crear" una nueva tarea o "completar" una existente.
//   tareaData: Objeto con los datos necesarios (id, descripcion) para crear o completar una tarea.
//   tareas: Array de tareas ya existentes.
//   Lógica :
//   Si accion es "crear", se crea un nuevo objeto Tarea y se agrega al array tareas.
//   Si accion es "completar", se busca la tarea por su id y se llama al método marcarComoCompletada para marcarla como completada.
//   Ejemplo de Uso :
// let tareas = [];
// tareas = gestionarTareas("crear", { descripcion: "Comprar pan" }, tareas);
// console.log(tareas); // [{ id: 1, descripcion: "Comprar pan", completada: false }]

// tareas = gestionarTareas("completar", { id: 1 }, tareas);
// console.log(tareas); // [{ id: 1, descripcion: "Comprar pan", completada: true }]


  const gestionarTareas = (accion, tareaData, tareas) => {
   
  };


  module.exports = { Usuario, Habitacion, Tarea, gestionarUsuario, hacerReserva, gestionarTareas };


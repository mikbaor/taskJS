// Validación de Formulario de Registro
// Situación : Un formulario requiere verificar si los campos están llenos.
// Ejercicio :
// Crea una función validarFormulario que reciba un objeto con nombre, email y password.

// Si alguno de los campos está vacío (""), retorna "Faltan campos obligatorios".
// Si todos son truthy, retorna "Formulario válido".
// Ejemplo : validarFormulario({ nombre: "Ana", email: "", password: "123" }); 


const validarFormulario = (formulario) => {

  };


//   Estado de Carga en una API
//   Situación : Mostrar un mensaje mientras se carga data de una API.
//   Ejercicio :
//   Crea una función mostrarEstado que reciba data (podría ser null o un array).
  
//   Si data es falsy (ej: null), retorna "Cargando...".
//   Si data es truthy pero está vacía ([]), retorna "No hay datos".
//   Si hay datos, retorna "Datos disponibles".
//   Ejemplo : mostrarEstado([]);

const mostrarEstado = (data) => {

  };


//   Autenticación de Usuario
//   Situación : Verificar si un usuario está autenticado.
//   Ejercicio :
//   Crea una función verificarSesion que reciba un token (podría ser undefined o una cadena).
  
//   Si el token es falsy, redirige a /login.
//   Si es truthy, permite acceso a /dashboard.
//   Ejemplo : verificarSesion();


const verificarSesion = (token) => {

  };



//   Gestión de Carrito de Compras
//   Situación : Mostrar un mensaje si el carrito está vacío.
//   Ejercicio :
//   Crea una función mostrarCarrito que reciba un array productos.
  
//   Si productos es falsy o vacío ([]), retorna "Carrito vacío".
//   Si tiene elementos, retorna "Hay X productos".
//   Ejemplo : mostrarCarrito([]);


const mostrarCarrito = (productos) => {

  };


//   Verificación de Permisos de Usuario
// Situación : Controlar acceso a rutas según roles.
// Ejercicio :
// Crea una función verificarPermiso que reciba usuario (objeto con rol).

// Si usuario.rol es "admin", retorna true.
// Si es "invitado" o undefined, retorna false.
// Ejemplo : verificarPermiso({ rol: "admin" });


const verificarPermiso = (usuario) => {

  };


//   Estado de una Tarea Asíncrona
//   Situación : Manejar estados de una promesa (cargando, error, éxito).
//   Ejercicio :
//   Crea una función mostrarEstadoTarea que reciba estado (puede ser "loading", "error", o null).
  
//   Si estado es "loading", retorna "Procesando...".
//   Si es "error", retorna "Ocurrió un error".
//   Si es null, retorna "Tarea no iniciada".
//   Ejemplo : mostrarEstadoTarea("loading");


const mostrarEstadoTarea = (estado) => {

  };


//   Manejo de Parámetros Opcionales
//   Situación : Función con parámetros opcionales.
//   Ejercicio :
//   Crea una función configurarOpciones que reciba opciones (objeto).
  
//   Si opciones.velocidad es falsy, usa 10 por defecto.
//   Si opciones.tema es falsy, usa "claro".
//   Ejemplo : configurarOpciones({ velocidad: 20 });

const configurarOpciones = (opciones) => {

  };


  module.exports = {
    validarFormulario,
    mostrarEstado,
    verificarSesion,
    mostrarCarrito,
    verificarPermiso,
    mostrarEstadoTarea,
    configurarOpciones
  };
// Validación de Formulario de Registro
// Situación : Un formulario requiere verificar si los campos están llenos.
// Ejercicio :
// Crea una función validarFormulario que reciba un objeto con nombre, email y password.

// Si alguno de los campos está vacío (""), retorna "Faltan campos obligatorios".
// Si todos son truthy, retorna "Formulario válido".
// Ejemplo : validarFormulario({ nombre: "Ana", email: "", password: "123" }); 


const validarFormulario = (formulario) => {
  if (!formulario.nombre || !formulario.email || !formulario.password) {
    return "Faltan campos obligatorios";
  }
  return "Formulario válido";
};

// Ejemplos de uso:
console.log(validarFormulario({ nombre: "Ana", email: "", password: "123" }));
// Salida: "Faltan campos obligatorios"

console.log(validarFormulario({ nombre: "Ana", email: "ana@example.com", password: "123" }));
// Salida: "Formulario válido"

console.log(validarFormulario({ nombre: "", email: "juan@example.com", password: "abc123" }));
// Salida: "Faltan campos obligatorios"

console.log(validarFormulario({ nombre: "Luis", email: "luis@example.com", password: "" }));
// Salida: "Faltan campos obligatorios"










//   Estado de Carga en una API
//   Situación : Mostrar un mensaje mientras se carga data de una API.
//   Ejercicio :
//   Crea una función mostrarEstado que reciba data (podría ser null o un array).
  
//   Si data es falsy (ej: null), retorna "Cargando...".
//   Si data es truthy pero está vacía ([]), retorna "No hay datos".
//   Si hay datos, retorna "Datos disponibles".
//   Ejemplo : mostrarEstado([]);

const mostrarEstado = (data) => {
  if (!data) {
    return "Cargando...";
  } else if (data.length === 0) {
    return "No hay datos";
  } else {
    return "Datos disponibles";
  }
};

console.log(mostrarEstado(null)); // Salida: "Cargando..."
console.log(mostrarEstado([])); // Salida: "No hay datos"
console.log(mostrarEstado(["dato1", "dato2"])); // Salida: "Datos disponibles"









//   Autenticación de Usuario
//   Situación : Verificar si un usuario está autenticado.
//   Ejercicio :
//   Crea una función verificarSesion que reciba un token (podría ser undefined o una cadena).
  
//   Si el token es falsy, redirige a /login.
//   Si es truthy, permite acceso a /dashboard.
//   Ejemplo : verificarSesion();


const verificarSesion = (token) => {
  if (!token) {
    return "/login";
  } else {
    return "/dashboard";
  }
};

// Ejemplos de uso:
console.log(verificarSesion(undefined)); // Salida: "/login"
console.log(verificarSesion("abc123")); // Salida: "/dashboard"
console.log(verificarSesion("")); // Salida: "/login"
console.log(verificarSesion(null)); // Salida: "/login"







//   Gestión de Carrito de Compras
//   Situación : Mostrar un mensaje si el carrito está vacío.
//   Ejercicio :
//   Crea una función mostrarCarrito que reciba un array productos.
  
//   Si productos es falsy o vacío ([]), retorna "Carrito vacío".
//   Si tiene elementos, retorna "Hay X productos".
//   Ejemplo : mostrarCarrito([]);


const mostrarCarrito = (productos) => {
  if (!productos || productos.length === 0) {
    return "Carrito vacío";
  } else {
    return `Hay ${productos.length} productos`;
  }
};

// Ejemplos de uso:
console.log(mostrarCarrito([])); // Salida: "Carrito vacío"
console.log(mostrarCarrito(["Producto1", "Producto2"])); // Salida: "Hay 2 productos"
console.log(mostrarCarrito(null)); // Salida: "Carrito vacío"
console.log(mostrarCarrito(undefined)); // Salida: "Carrito vacío"





//   Verificación de Permisos de Usuario
// Situación : Controlar acceso a rutas según roles.
// Ejercicio :
// Crea una función verificarPermiso que reciba usuario (objeto con rol).

// Si usuario.rol es "admin", retorna true.
// Si es "invitado" o undefined, retorna false.
// Ejemplo : verificarPermiso({ rol: "admin" });


const verificarPermiso = (usuario) => {
  if (usuario.rol === "admin") {
    return true;
  } else {
    return false;
  }
};

// Ejemplos de uso:
console.log(verificarPermiso({ rol: "admin" })); // Salida: true
console.log(verificarPermiso({ rol: "invitado" })); // Salida: false
console.log(verificarPermiso({})); // Salida: false
console.log(verificarPermiso({ rol: undefined })); // Salida: false







//   Estado de una Tarea Asíncrona
//   Situación : Manejar estados de una promesa (cargando, error, éxito).
//   Ejercicio :
//   Crea una función mostrarEstadoTarea que reciba estado (puede ser "loading", "error", o null).
  
//   Si estado es "loading", retorna "Procesando...".
//   Si es "error", retorna "Ocurrió un error".
//   Si es null, retorna "Tarea no iniciada".
//   Ejemplo : mostrarEstadoTarea("loading");


const mostrarEstadoTarea = (estado) => {
  if (estado === "loading") {
    return "Procesando...";
  } else if (estado === "error") {
    return "Ocurrió un error";
  } else if (estado === null) {
    return "Tarea no iniciada";
  }
};

// Ejemplos de uso:
console.log(mostrarEstadoTarea("loading")); // Salida: "Procesando..."
console.log(mostrarEstadoTarea("error")); // Salida: "Ocurrió un error"
console.log(mostrarEstadoTarea(null)); // Salida: "Tarea no iniciada"








//   Manejo de Parámetros Opcionales
//   Situación : Función con parámetros opcionales.
//   Ejercicio :
//   Crea una función configurarOpciones que reciba opciones (objeto).
  
//   Si opciones.velocidad es falsy, usa 10 por defecto.
//   Si opciones.tema es falsy, usa "claro".
//   Ejemplo : configurarOpciones({ velocidad: 20 });

const configurarOpciones = (opciones) => {
  let velocidad;
  if (opciones.velocidad) {
    velocidad = opciones.velocidad;
  } else {
    velocidad = 10;
  }

  let tema;
  if (opciones.tema) {
    tema = opciones.tema;
  } else {
    tema = "claro";
  }

  return { velocidad, tema };
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
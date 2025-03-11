

// Propiedades y Métodos Detallados
// Clase Empleado
// Propiedades :

// nombre (string): Nombre del empleado.
// salarioBase (number): Salario base sin bonificaciones.
// _bono (number): Bono asignado (encapsulado para control interno).
// Métodos :

// setBono(bono) :
// Asigna un bono válido (solo números positivos).

// calcularSalario() :
// Calcula el salario total sumando el salario base y el bono.

class Empleado {
 
  }


//   Clase Gerente (hereda de Empleado)
// Propiedades adicionales :

// departamento (string): Área que dirige el gerente (ej: "Ventas").
// Métodos sobrescritos :

// calcularSalario() :
// Añade un 10% adicional al salario base (no al bono) por ser gerente.
  
  class Gerente extends Empleado {
    
  }

  //  Clase Paquete
  // Propósito : Representar un paquete con seguimiento de estado y un ID único.
  
  // Propiedades :  
  // id (número):
  // Generado automáticamente usando Paquete.contadorPaquetes (propiedad estática).
  // Static garantiza que el contador sea compartido por todas las instancias , asegurando IDs únicos.
  // Ejemplo: El primer paquete tendrá id = 1, el segundo id = 2, etc.
  // destinatario (string):
  // Nombre o identificador del destinatario del paquete.
  // _estado (string):
  // Estado actual del paquete (ej: "enviado", "en tránsito").
  // Encapsulado (con _) para evitar modificaciones directas.
  // Solo se modifica mediante el método actualizarEstado.

  // Métodos :  
  // constructor(destinatario) :
  // Inicializa el paquete con un ID único y el estado "enviado".
  // get estado() :
  // Getter para acceder al valor encapsulado de _estado.
  // Ejemplo: paquete.estado retorna el estado actual.
  // actualizarEstado(nuevoEstado) :
  // Valida que el nuevoEstado esté en la lista de estados permitidos (["enviado", "en tránsito", "entregado"]).
  // Si es válido, actualiza _estado; si no, ignora la acción.




  class Paquete {
    
  }



//Clase PaqueteInternacional (hereda de Paquete)
// Propósito : Extender la funcionalidad de Paquete para manejar envíos internacionales.

// Propiedades adicionales :
// pais (string):
// Métodos :
// constructor(destinatario, pais) :
// Llama al constructor de Paquete con super(destinatario) para inicializar id y destinatario.
// Asigna el pais específico para envíos internacionales.


  class PaqueteInternacional extends Paquete {

  }


// Clase Producto
// Propósito : Representar un producto físico con propiedades básicas y lógica para aplicar descuentos.

// Propiedades :
// nombre (string): Nombre del producto.
// precio (number): Precio base del producto.
// stock (number): Cantidad disponible en inventario.


// Métodos :
// constructor(nombre, precio, stock) :
// Inicializa las propiedades del producto.
// aplicarDescuento(porcentaje) :
// Aplica un descuento al precio del producto.

// Lógica
// Ejemplo: Si precio = 100 y porcentaje = 20, el nuevo precio será 80.

  class Producto {
   
  }
  

// Clase ProductoDigital (hereda de Producto)
// Propósito : Extender Producto para representar productos digitales (ej: eBooks, software), que no permiten descuentos .

// Propiedades adicionales :
// tamanoMB (number): Tamaño del producto digital en megabytes.

// Métodos sobrescritos :
// aplicarDescuento() :
// Sobrescribe el método de la clase padre para lanzar un error.
// Razón : Los productos digitales no deben tener descuentos (ej: licencias de software fijas).

  class ProductoDigital extends Producto {

  }

//   Clase UsuarioCasino
// Propósito : Representar a un usuario de un casino con un saldo para apostar.

// Propiedades :
// nombre (string): Nombre del usuario.
// _saldo (number): Saldo disponible para apostar (encapsulado con _ para control interno).
// Métodos :

// constructor(nombre, saldo) :
// Inicializa el nombre y el saldo del usuario.
// get saldo() :
// Getter que permite acceder al saldo encapsulado.
// Ejemplo: usuario.saldo retorna el valor de _saldo.
// apostar(cantidad) :
// Realiza una apuesta y actualiza el saldo:
// Validación : Si la cantidad excede el saldo, lanza un error.


  class UsuarioCasino {
  
  }
  

  // Clase Ruleta (hereda de UsuarioCasino)
  // Propósito : Extender la funcionalidad para un juego de ruleta con reglas específicas.
  
  // Propiedades estáticas :
  
  // static apuestaMinima = 100 :
  // Define una apuesta mínima de 100 para cualquier instancia de Ruleta.
  // Static : Compartido por todas las instancias (no varía entre usuarios).
  // Métodos :
  
  // jugar(cantidad) :
  // Validación :
  // Si la cantidad es menor que Ruleta.apuestaMinima, lanza un error.
  // Lógica :
  // Usa super.apostar(cantidad) para reutilizar la lógica de apuesta del padre.

  class Ruleta extends UsuarioCasino {
   
  }


  // Clase Vuelo
  // Propósito : Representar un vuelo con capacidad limitada y gestión de pasajeros.
  
  // Propiedades :  
  // numero (string): Identificador único del vuelo (ej: "AA123").
  // capacidad (number): Número máximo de pasajeros permitidos.
  // _pasajeros (array): Lista de pasajeros abordados (encapsulada con _ para control interno).
  // Métodos :
  
  // constructor(numero, capacidad) :
  // Inicializa el vuelo con su número y capacidad. _pasajeros comienza como un array vacío.
  // agregarPasajero(pasajero) :
  // Agrega un pasajero al vuelo si hay espacio disponible :
  // Validación : Lanza un error si el vuelo está lleno.

  class Vuelo {
   
  }

//   Clase VueloEjecutivo (hereda de Vuelo)
// Propósito : Extender Vuelo para vuelos ejecutivos con servicios VIP.

// Propiedades adicionales :
// _servicioVIP (boolean): Indica si el vuelo ofrece servicio VIP (siempre true).
// Métodos estáticos :
// static esVip() :
// Retorna true para indicar que todos los vuelos ejecutivos tienen servicio VIP.
  
  class VueloEjecutivo extends Vuelo {
  
  }



  // Clase Ruta
  // Propósito : Representar una ruta básica con un costo fijo.
  
  // Propiedades :
  
  // origen (string): Punto de partida de la ruta.
  // destino (string): Punto de llegada de la ruta.
  // _costoBase (number): Costo base de la ruta (encapsulado con _ para control interno).
  // Métodos :
  
  // constructor(origen, destino) :
  // Inicializa la ruta con origen, destino y un _costoBase fijo de 100 .
  // calcularCosto() :
  // Retorna el _costoBase sin modificaciones.

  class Ruta {
  }

//   Clase RutaExpress (hereda de Ruta)
// Propósito : Extender Ruta para rutas express con un costo 1.5 veces mayor .

// Modificaciones en el constructor :

// this._costoBase *= 1.5 :
// Aumenta el costo base heredado de Ruta multiplicándolo por 1.5 (ej: 100 → 150).
// Herencia : Usa super(origen, destino) para inicializar las propiedades de la clase padre.
// Métodos :

// No redefine calcularCosto() :
// Usa el método heredado, que ahora retorna el _costoBase modificado (150 en lugar de 100).
  
  class RutaExpress extends Ruta {
 
  }

  // Clase Suscripcion
  // Propósito : Representar una suscripción genérica con un precio basado en el plan elegido.
  
  // Propiedades :  
  // usuario (string): Nombre o identificador del usuario suscrito.
  // plan (string): Tipo de plan ("premium", "básico").
  // _precio (number): Costo de la suscripción (encapsulado con _ para control interno).

  // Métodos :  
  // constructor(usuario, plan) :
  // Inicializa usuario y plan.
  // Calcula _precio según el plan:
  // Retorna un mensaje de renovación con el usuario y el precio:
 //`Suscripción de ${this.usuario} renovada por $${this._precio}`

  class Suscripcion {
   
  }
  

  // Clase SuscripcionEstudiantil (hereda de Suscripcion)
  // Propósito : Extender Suscripcion para estudiantes con un precio fijo y plan específico.
  
  // Modificaciones :  
  // Constructor :
  // Llama a super(usuario, "estudiante") para definir el plan como "estudiante".
  // Anula _precio :

  // Hereda usuario y plan de Suscripcion, pero redefine _precio para aplicar un costo especial.
  

  class SuscripcionEstudiantil extends Suscripcion {
  }

  module.exports = {
    Gerente,
    PaqueteInternacional,
    Producto,
    Ruleta,
    VueloEjecutivo,
    RutaExpress,
    SuscripcionEstudiantil,
    Vuelo
  };
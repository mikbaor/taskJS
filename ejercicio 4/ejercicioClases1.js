

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

class Empleado { //Estoy creando una clase. Esta representa a un empleado y tendrá propiedades y métodos relacionados con él.
  constructor(nombre, salarioBase) {
    this.nombre = nombre;
    this.salarioBase = salarioBase;
    this._bono = 0;
  }

  setBono(bono) {
    if (typeof bono === "number" && bono >= 0) {
      this._bono = bono;
    } else {
      throw new Error("El bono debe ser un número positivo.");
    }
  }

  calcularSalario() {
    return this.salarioBase + this._bono;
  }
}



//   Clase Gerente (hereda de Empleado)
// Propiedades adicionales :

// departamento (string): Área que dirige el gerente (ej: "Ventas").
// Métodos sobrescritos :

// calcularSalario() :
// Añade un 10% adicional al salario base (no al bono) por ser gerente.


  
  class Gerente extends Empleado {
    constructor(nombre, salarioBase, departamento) {
      super(nombre, salarioBase);
    this.departamento = departamento
  }
  

  
  calcularSalario() {
    return (this.salarioBase *1.10 )+ this._bono
  }
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

    static contadorPaquetes = 0;

    constructor(destinatario) {
      this.id = ++Paquete.contadorPaquetes;
      this.destinatario = destinatario;
      this._estado = "enviado";
    }
  
    get estado() {
      return this._estado;
    }
  
    actualizarEstado(nuevoEstado) {
      const estadosPermitidos = ["enviado", "en tránsito", "entregado"];
      if (estadosPermitidos.includes(nuevoEstado)) {
        this._estado = nuevoEstado;
      }
    }
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

    constructor(destinatario, pais) {
      super(destinatario); 
      this.pais = pais;    
    }

  }

  let paqueteIntl = new PaqueteInternacional

  console.log(`ID: ${paqueteIntl.id}`);          
console.log(`Destinatario: ${paqueteIntl.destinatario}`);
console.log(`País: ${paqueteIntl.pais}`);       
console.log(`Estado: ${paqueteIntl.estado}`);   

// Actualizar el estado
paqueteIntl.actualizarEstado("en tránsito");
console.log(`Estado actualizado: ${paqueteIntl.estado}`);











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

    constructor(nombre, precio, stock) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock
    }

    aplicarDescuento(porcentaje) {
      if (porcentaje >= 0 && porcentaje <= 100) {
        const descuento = (this.precio * porcentaje) / 100;
        this.precio = this.precio - descuento;
      } 
    }
   
  }

  // Crear un producto
let telefono = new Producto("Teléfono", 100, 20);

// Mostrar información inicial
console.log(`Precio inicial: $${telefono.precio}`); // Precio inicial: $500

// Aplicar un descuento del 25%
telefono.aplicarDescuento(25);
console.log(`Precio con descuento: $${telefono.precio}`); // Precio con descuento: $375

// Intentar aplicar un descuento inválido
telefono.aplicarDescuento(150);
  










// Clase ProductoDigital (hereda de Producto)
// Propósito : Extender Producto para representar productos digitales (ej: eBooks, software), que no permiten descuentos .

// Propiedades adicionales :
// tamanoMB (number): Tamaño del producto digital en megabytes.

// Métodos sobrescritos :
// aplicarDescuento() :
// Sobrescribe el método de la clase padre para lanzar un error.
// Razón : Los productos digitales no deben tener descuentos (ej: licencias de software fijas).

  class ProductoDigital extends Producto {

    constructor(nombre, precio, stock, tamanoMB) {
      super(nombre, precio, stock); 
      this.tamanoMB = tamanoMB;     
    }
  
    
    aplicarDescuento() {
      console.log("Error: Los productos digitales no admiten descuentos.");
    }

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

    constructor(nombre, saldo) {
      this.nombre = nombre; // Nombre del usuario
      this._saldo = saldo;  // Saldo inicial (encapsulado)
    }
  
    // Getter para acceder al saldo encapsulado
    get saldo() {
      return this._saldo;
    }
  
    // Método para realizar una apuesta
    apostar(cantidad) {
      if (cantidad > this._saldo) {
        console.log("Error: No tienes suficiente saldo para esta apuesta.");
      } else {
        this._saldo -= cantidad; // Resta la cantidad apostada del saldo
        return this.saldo
      }
    }
  
  }

//   const juancho = new UsuarioCasino("Juancho", 500);

// console.log(`${juan.nombre}, tu saldo inicial es: $${juancho.saldo}`);

// juancho.registrarApuesta(200);

// try {
//   juancho.registrarApuesta(400);
// } catch (error) {
//   console.log("Se produjo un error:", error.message);
// }

// console.log(`${juancho.nombre}, tu saldo final es: $${juan.saldo}`);
  










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
    static apuestaMinima = 100;

    jugar(cantidad) {
      if (cantidad < Ruleta.apuestaMinima) {
        throw new Error(`La apuesta mínima para la ruleta es de ${Ruleta.apuestaMinima}.`);
      }
  
      return super.apostar(cantidad);
    }
  }

  try {
    const jugador = new Ruleta("Juan", 500);
    console.log(jugador.jugar(200));
    console.log(jugador.jugar(50));
  } catch (error) {
    console.error(error.message);
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
    constructor(numero, capacidad) {
      this.numero = numero;
      this.capacidad = capacidad;
      this._pasajeros = [];
    }
  
    agregarPasajero(pasajero) {
      if (this._pasajeros.length >= this.capacidad) {
        throw new Error("Vuelo lleno");
      }
  
      this._pasajeros.push(pasajero);
  
      return (
        "Pasajero " +
        pasajero +
        " agregado al vuelo " +
        this.numero +
        ". Espacios disponibles: " +
        (this.capacidad - this._pasajeros.length)
      );
    }
   
  }


try {
  const vueloAA123 = new Vuelo("AA123", 3);

  console.log(vueloAA123.agregarPasajero("Juan"));
  console.log(vueloAA123.agregarPasajero("María"));
  console.log(vueloAA123.agregarPasajero("Pedro"));

  console.log(vueloAA123.agregarPasajero("Ana"));
} catch (error) {
  console.error(error.message);
}














//   Clase VueloEjecutivo (hereda de Vuelo)
// Propósito : Extender Vuelo para vuelos ejecutivos con servicios VIP.

// Propiedades adicionales :
// _servicioVIP (boolean): Indica si el vuelo ofrece servicio VIP (siempre true).
// Métodos estáticos :
// static esVip() :
// Retorna true para indicar que todos los vuelos ejecutivos tienen servicio VIP.
  
  class VueloEjecutivo extends Vuelo {
    constructor(numero, capacidad) {
      super(numero, capacidad);
      this._servicioVIP = true;
    }
  
    static esVip() {
      return true;
    }
  
  }
  try {
    const vueloVIP123 = new VueloEjecutivo("VIP123", 5);
  
    console.log(vueloVIP123.agregarPasajero("Carlos"));
    console.log(`¿Este vuelo tiene servicio VIP? ${vueloVIP123._servicioVIP}`);
    console.log(`¿Todos los vuelos ejecutivos son VIP? ${VueloEjecutivo.esVip()}`);
  } catch (error) {
    console.error(error.message);
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
    constructor(origen, destino) {
      this.origen = origen;
      this.destino = destino;
      this._costoBase = 100;
    }
  
    calcularCosto() {
      return this._costoBase;
    }
  }

  const ruta1 = new Ruta("Ciudad A", "Ciudad B");
console.log(`Origen: ${ruta1.origen}, Destino: ${ruta1.destino}`);
console.log(`Costo de la ruta: ${ruta1.calcularCosto()}`);














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
    constructor(origen, destino) {
      super(origen, destino);
      this._costoBase *= 1.5;
    }
 
  }

  const rutaExpress1 = new RutaExpress("Ciudad A", "Ciudad B");
console.log(`Origen: ${rutaExpress1.origen}, Destino: ${rutaExpress1.destino}`);
console.log(`Costo de la ruta express: ${rutaExpress1.calcularCosto()}`);














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
    constructor(usuario, plan) {
      this.usuario = usuario;
      this.plan = plan;
  
      if (this.plan === "premium") {
        this._precio = 100;
      } else if (this.plan === "básico") {
        this._precio = 50;
      } else if (this.plan === "estudiante") {
        // No asignamos precio aquí; se redefinirá en SuscripcionEstudiantil
      } else {
        throw new Error("Plan no válido. Debe ser 'premium', 'básico' o 'estudiante'.");
      }
    }
  
    renovar() {
      return `Suscripción de ${this.usuario} renovada por $${this._precio}`;
    }
  }
  













  // Clase SuscripcionEstudiantil (hereda de Suscripcion)
  // Propósito : Extender Suscripcion para estudiantes con un precio fijo y plan específico.
  
  // Modificaciones :  
  // Constructor :
  // Llama a super(usuario, "estudiante") para definir el plan como "estudiante".
  // Anula _precio :

  // Hereda usuario y plan de Suscripcion, pero redefine _precio para aplicar un costo especial.
  // el nuevo precio debe ser 30

  class SuscripcionEstudiantil extends Suscripcion {
    constructor(usuario) {
      super(usuario, "estudiante"); // Llama al constructor de la clase padre con plan fijo "estudiante"
      this._precio = 30; // Redefine el precio para estudiantes
    }
  }

  const suscripcionEstudiante = new SuscripcionEstudiantil("Luis");
console.log(suscripcionEstudiante.renovar());




















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
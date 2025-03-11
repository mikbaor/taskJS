const {
    Gerente,
    PaqueteInternacional,
    Producto,
    Ruleta,
    Vuelo,
    VueloEjecutivo,
    RutaExpress,
    SuscripcionEstudiantil
  } = require ("./ejercicioClases1")

  const  {
    validarFormulario,
    mostrarEstado,
    verificarSesion,
    mostrarCarrito,
    verificarPermiso,
    mostrarEstadoTarea,
    configurarOpciones
  } = require ("./EjerciciosTruthyFalsy")


  const  { gestionarUsuario, hacerReserva, gestionarTareas, Usuario, Habitacion, Tarea, } = require  ("./ejercicioClases2")


test("Calcular salario de gerente con bono", () => {
    const gerente = new Gerente("Ana", 1000, "Ventas");
    gerente.setBono(500);
    expect(gerente.calcularSalario()).toBe((1000 + 500) * 1.1);
  });


  test("Actualizar estado de paquete internacional", () => {
    const paquete = new PaqueteInternacional("Carlos", "USA");
    expect(() => paquete.actualizarEstado("en tránsito")).toThrow();
  });


  test("Apostar en ruleta con saldo suficiente", () => {
    const jugador = new Ruleta("Pedro", 500);
    expect(jugador.jugar(200)).toBe(300);
  });


  test("Aplicar descuento a producto físico", () => {
    const producto = new Producto("Libro", 100, 10);
    producto.aplicarDescuento(20);
    expect(producto.precio).toBe(80);
  });


  test("Agregar pasajero a vuelo ejecutivo", () => {
    const vuelo = new VueloEjecutivo("AA123", 5);
    vuelo.agregarPasajero("Ana");
    expect(vuelo._pasajeros.length).toBe(1);
  });


  test("Costo de ruta express", () => {
    const ruta = new RutaExpress("CDMX", "Guadalajara");
    expect(ruta.calcularCosto()).toBe(150);
  });


  test("Renovar suscripción estudiantil", () => {
    const suscripcion = new SuscripcionEstudiantil("Luis");
    expect(suscripcion.renovar()).toBe("Suscripción de Luis renovada por $50");
  });

  test("Agregar pasajero a vuelo ejecutivo", () => {
    const vuelo = new VueloEjecutivo("EJ789", 5);
    vuelo.agregarPasajero("Pedro");
    expect(vuelo._pasajeros.length).toBe(1);
  });
  
  test("Verificar servicio VIP en vuelo ejecutivo", () => {
    expect(VueloEjecutivo.esVip()).toBe(true);
  });
  
  test("Error al agregar pasajero a vuelo lleno", () => {
    const vuelo = new Vuelo("AA321", 1);
    vuelo.agregarPasajero("Ana");
    expect(() => vuelo.agregarPasajero("Luis")).toThrow("Vuelo lleno");
  });


  test("Validar formulario con campos faltantes", () => {
    expect(validarFormulario({ nombre: "Ana", email: "", password: "123" })).toBe(
      "Faltan campos obligatorios"
    );
  });
  
  test("Validar formulario completo", () => {
    expect(
      validarFormulario({ nombre: "Ana", email: "ana@example.com", password: "123" })
    ).toBe("Formulario válido");
  });


  test("Mostrar estado cuando data es null", () => {
    expect(mostrarEstado(null)).toBe("Cargando...");
  });
  
  test("Mostrar estado cuando data está vacía", () => {
    expect(mostrarEstado([])).toBe("No hay datos");
  });
  
  test("Mostrar estado cuando hay datos", () => {
    expect(mostrarEstado([1, 2, 3])).toBe("Datos disponibles");
  });

  test("Redirigir a login si token es falsy", () => {
    expect(verificarSesion(undefined)).toBe("/login");
  });
  
  test("Permitir acceso a dashboard si token es truthy", () => {
    expect(verificarSesion("abc123")).toBe("/dashboard");
  });

  test("Mostrar carrito vacío", () => {
    expect(mostrarCarrito([])).toBe("Carrito vacío");
  });
  
  test("Mostrar cantidad de productos en el carrito", () => {
    expect(mostrarCarrito(["Producto1", "Producto2"])).toBe("Hay 2 productos");
  });

  test("Verificar permiso de admin", () => {
    expect(verificarPermiso({ rol: "admin" })).toBe(true);
  });
  
  test("Verificar permiso de invitado", () => {
    expect(verificarPermiso({ rol: "invitado" })).toBe(false);
  });
  
  test("Verificar permiso sin rol", () => {
    expect(verificarPermiso({})).toBe(false);
  });

  test("Mostrar estado de tarea loading", () => {
    expect(mostrarEstadoTarea("loading")).toBe("Procesando...");
  });
  
  test("Mostrar estado de tarea error", () => {
    expect(mostrarEstadoTarea("error")).toBe("Ocurrió un error");
  });
  
  test("Mostrar estado de tarea no iniciada", () => {
    expect(mostrarEstadoTarea(null)).toBe("Tarea no iniciada");
  });


  test("Configurar opciones con valores por defecto", () => {
    expect(configurarOpciones({})).toEqual({ velocidad: 10, tema: "claro" });
  });
  
  test("Configurar opciones con valores personalizados", () => {
    expect(configurarOpciones({ velocidad: 20, tema: "oscuro" })).toEqual({
      velocidad: 20,
      tema: "oscuro",
    });
  });


  test("Crear un nuevo usuario", () => {
    const usuarios = [];
    gestionarUsuario("crear", { id: 1, nombre: "Ana", email: "ana@example.com" }, usuarios);
    expect(usuarios.length).toBe(1);
    expect(usuarios[0].nombre).toBe("Ana");
  });
  
  test("Actualizar un usuario existente", () => {
    const usuarios = [new Usuario(1, "Ana", "ana@example.com")];
    gestionarUsuario("actualizar", { id: 1, nombre: "Ana López" }, usuarios);
    expect(usuarios[0].nombre).toBe("Ana López");
  });


  test("Reservar una habitación disponible", () => {
    const habitaciones = [new Habitacion(101, 2), new Habitacion(102, 4)];
    const resultado = hacerReserva(101, habitaciones);
    expect(resultado).toBe("Habitación 101 reservada");
    expect(habitaciones[0].disponible).toBe(false);
  });
  
  test("Intentar reservar una habitación no disponible", () => {
    const habitaciones = [new Habitacion(101, 2, false)];
    const resultado = hacerReserva(101, habitaciones);
    expect(resultado).toBe("Habitación no disponible");
  });



  test("Crear una nueva tarea", () => {
    const tareas = [];
    gestionarTareas("crear", { descripcion: "Comprar pan" }, tareas);
    expect(tareas.length).toBe(1);
    expect(tareas[0].descripcion).toBe("Comprar pan");
  });
  
  test("Marcar una tarea como completada", () => {
    const tareas = [new Tarea(1, "Comprar pan")];
    gestionarTareas("completar", { id: 1 }, tareas);
    expect(tareas[0].completada).toBe(true);
  });
  


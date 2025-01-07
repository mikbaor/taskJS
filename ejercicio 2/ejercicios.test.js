const { verificarNumero, clasificarCalificacion, categorizarNumero, obtenerDiaSemana, clasificarProducto, convertirCalificacion    } = require("./EjerciciosCondicionales");
const {ordenarTareasPorPrioridad, agruparLibrosPorGenero, organizarPorDepartamento, clasificarInventario, clasificarAlumnos } = require("./EjerciciosTematicos");
const {  manejarProducto, actualizarEstadoTarea, manejarEmpleado, verificarInventario, asignarRol  } = require("./EjerciciosTematicos2.js");

test('verificarNumero debería clasificar el número correctamente', () => {
  expect(verificarNumero(10)).toBe("positivo");
  expect(verificarNumero(-5)).toBe("negativo");
  expect(verificarNumero(0)).toBe("cero");
});

test('clasificarCalificacion debería clasificar correctamente', () => {
    expect(clasificarCalificacion(85)).toBe("Aprobado");
    expect(clasificarCalificacion(60)).toBe("Regular");
    expect(clasificarCalificacion(40)).toBe("Reprobado");
  });


  test('categorizarNumero debería clasificar correctamente', () => {
    expect(categorizarNumero(8)).toBe("par y positivo");
    expect(categorizarNumero(7)).toBe("impar y positivo");
    expect(categorizarNumero(-3)).toBe("negativo");
  });


  test('obtenerDiaSemana debería devolver el día correcto', () => {
    expect(obtenerDiaSemana(1)).toBe("Lunes");
    expect(obtenerDiaSemana(5)).toBe("Viernes");
    expect(obtenerDiaSemana(7)).toBe("Domingo");
    expect(obtenerDiaSemana(0)).toBe("Número inválido");
  });


  test('clasificarProducto debería devolver la categoría correcta', () => {
    expect(clasificarProducto("A")).toBe("Electrónica");
    expect(clasificarProducto("B")).toBe("Ropa");
    expect(clasificarProducto("C")).toBe("Alimentos");
    expect(clasificarProducto("E")).toBe("Código desconocido");
  });

  describe('Pruebas para clasificarAlumnos', () => {
    const alumnos = [
      { nombre: "Juan", calificacion: 5 },
      { nombre: "Ana", calificacion: 7 },
      { nombre: "Luis", calificacion: 10 },
      { nombre: "María", calificacion: 9 },
      { nombre: "Pedro", calificacion: 4 },
    ];
  
    test('Debería clasificar correctamente los alumnos', () => {
      const resultado = clasificarAlumnos(alumnos);
      expect(resultado.reprobados).toHaveLength(2);
      expect(resultado.aprobados).toHaveLength(2);
      expect(resultado.excelentes).toHaveLength(1);
      expect(resultado.excelentes[0].nombre).toBe("Luis");
    });
  });
  
  describe('Pruebas para clasificarInventario', () => {
    const productos = [
      { nombre: "Laptop", cantidad: 0 },
      { nombre: "Teclado", cantidad: 5 },
      { nombre: "Ratón", cantidad: 15 },
      { nombre: "Monitor", cantidad: 2 },
    ];
  
    test('Debería clasificar correctamente el inventario', () => {
      const resultado = clasificarInventario(productos);
      expect(resultado.agotados).toHaveLength(1);
      expect(resultado.bajoInventario).toHaveLength(2);
      expect(resultado.suficienteInventario).toHaveLength(1);
      expect(resultado.agotados[0].nombre).toBe("Laptop");
    });
  });


  describe('Pruebas para organizarPorDepartamento', () => {
    const empleados = [
      { nombre: "Carlos", departamento: "Ventas" },
      { nombre: "Luisa", departamento: "Marketing" },
      { nombre: "Pedro", departamento: "Ventas" },
      { nombre: "Ana", departamento: "TI" },
    ];
  
    test('Debería organizar correctamente los empleados por departamento', () => {
      const resultado = organizarPorDepartamento(empleados);
      expect(resultado.Ventas).toHaveLength(2);
      expect(resultado.Marketing).toHaveLength(1);
      expect(resultado.TI).toHaveLength(1);
      expect(resultado.Ventas).toEqual(
        expect.arrayContaining([{ nombre: "Carlos", departamento: "Ventas" }])
      );
    });
  });
  

  describe('Pruebas para agruparLibrosPorGenero', () => {
    const libros = [
      { titulo: "El Principito", genero: "Ficción" },
      { titulo: "1984", genero: "Distopía" },
      { titulo: "El Hobbit", genero: "Fantasía" },
      { titulo: "Dune", genero: "Ficción" },
    ];
  
    test('Debería agrupar correctamente los libros por género', () => {
      const resultado = agruparLibrosPorGenero(libros);
      expect(resultado.Ficción).toHaveLength(2);
      expect(resultado.Distopía).toHaveLength(1);
      expect(resultado.Fantasía).toHaveLength(1);
      expect(resultado.Ficción).toEqual(
        expect.arrayContaining([{ titulo: "El Principito", genero: "Ficción" }])
      );
    });
  });
  

  describe('Pruebas para ordenarTareasPorPrioridad', () => {
    const tareas = [
      { descripcion: "Pagar facturas", prioridad: "alta" },
      { descripcion: "Lavar ropa", prioridad: "baja" },
      { descripcion: "Estudiar", prioridad: "media" },
    ];
  
    test('Debería ordenar correctamente las tareas por prioridad', () => {
      const resultado = ordenarTareasPorPrioridad(tareas);
      expect(resultado.alta).toHaveLength(1);
      expect(resultado.media).toHaveLength(1);
      expect(resultado.baja).toHaveLength(1);
      expect(resultado.alta[0].descripcion).toBe("Pagar facturas");
    });
  });



describe("manejarProducto", () => {
  let productos;

  beforeEach(() => {
    productos = [
      { sku: 1, nombre: "Laptop", color: "Negro", inventario: 10 },
      { sku: 2, nombre: "Teclado", color: "Blanco", inventario: 5 },
      { sku: 3, nombre: "Ratón", color: "Rojo", inventario: 8 },
    ];
  });

  test("Agregar un nuevo producto", () => {
    manejarProducto(productos, { sku: 4, nombre: "Monitor", color: "Negro", inventario: 12 }, "new");
    expect(productos).toContainEqual({ sku: 4, nombre: "Monitor", color: "Negro", inventario: 12 });
  });

  test("Actualizar inventario de un producto existente (add)", () => {
    manejarProducto(productos, { sku: 2, nombre: "Teclado", color: "Blanco", inventario: 3 }, "add");
    expect(productos.find((p) => p.sku === 2).inventario).toBe(8);
  });

  test("Actualizar inventario de un producto existente (rest)", () => {
    manejarProducto(productos, { sku: 3, nombre: "Ratón", color: "Rojo", inventario: 2 }, "rest");
    expect(productos.find((p) => p.sku === 3).inventario).toBe(6);
  });

  test("Actualizar inventario de un producto existente (new)", () => {
    manejarProducto(productos, { sku: 1, nombre: "Laptop", color: "Negro", inventario: 15 }, "new");
    expect(productos.find((p) => p.sku === 1).inventario).toBe(15);
  });
});

  
describe("actualizarEstadoTarea", () => {
    let tareas;
  
    beforeEach(() => {
      tareas = [
        { id: 1, descripcion: "Pagar facturas", estado: "pendiente" },
        { id: 2, descripcion: "Lavar ropa", estado: "en progreso" },
      ];
    });
  
    test("Actualizar estado de una tarea existente", () => {
      actualizarEstadoTarea(tareas, 1, "completada");
      expect(tareas.find((t) => t.id === 1).estado).toBe("completada");
    });
  
    test("No actualizar una tarea inexistente", () => {
      actualizarEstadoTarea(tareas, 3, "pendiente");
      expect(tareas.find((t) => t.id === 3)).toBeUndefined();
    });
  });

  describe("manejarEmpleado", () => {
    let empleados;
  
    beforeEach(() => {
      empleados = [
        { id: 1, nombre: "Juan", salario: 3000 },
        { id: 2, nombre: "Ana", salario: 3500 },
      ];
    });
  
    test("Actualizar salario de un empleado existente", () => {
      manejarEmpleado(empleados, { id: 2, nombre: "Ana", salario: 4000 });
      expect(empleados.find((e) => e.id === 2).salario).toBe(4000);
    });
  
    test("Agregar un nuevo empleado", () => {
      manejarEmpleado(empleados, { id: 3, nombre: "Pedro", salario: 2500 });
      expect(empleados).toContainEqual({ id: 3, nombre: "Pedro", salario: 2500 });
    });
  });


  describe("verificarInventario", () => {
    let inventario;
  
    beforeEach(() => {
      inventario = [
        { id: 1, nombre: "Monitor", cantidad: 2, estado: "suficiente" },
        { id: 2, nombre: "Teclado", cantidad: 10, estado: "suficiente" },
      ];
    });
  
    test("Marcar productos con inventario bajo", () => {
      verificarInventario(inventario);
      expect(inventario.find((i) => i.id === 1).estado).toBe("bajo inventario");
      expect(inventario.find((i) => i.id === 2).estado).toBe("suficiente");
    });
  });


  describe("asignarRol", () => {
    let usuarios;
  
    beforeEach(() => {
      usuarios = [
        { id: 1, nombre: "Juan", rol: "Admin" },
        { id: 2, nombre: "Ana", rol: "Usuario" },
      ];
    });
  
    test("Asignar un rol a un usuario existente", () => {
      asignarRol(usuarios, { id: 1, nombre: "Juan", rol: "SuperAdmin" });
      expect(usuarios.find((u) => u.id === 1).rol).toBe("SuperAdmin");
    });
  
    test("Agregar un nuevo usuario con rol", () => {
      asignarRol(usuarios, { id: 3, nombre: "Pedro", rol: "Moderador" });
      expect(usuarios).toContainEqual({ id: 3, nombre: "Pedro", rol: "Moderador" });
    });
  });

const { crearPersona, obtenerPropiedad, agregarPropiedad, eliminarPropiedad, tienePropiedad, contarPropiedades, copiarObjeto, fusionarObjetos }  = require("./EjerciciosObj");
const { encontrarElemento, sumarElementos, obtenerPrimerElemento, obtenerUltimoElemento, agregarElementoFinal, eliminarPrimerElemento, filtrarMayores } = require("./EjerciciosArrays");

test('crearPersona debería devolver un objeto con las propiedades correctas', () => {
    expect(crearPersona("Juan", 25, "Madrid")).toEqual({ nombre: "Juan", edad: 25, ciudad: "Madrid" });
  });

  test('obtenerPropiedad debería devolver el valor de la propiedad especificada', () => {
    const obj = { nombre: "Ana", edad: 30 };
    expect(obtenerPropiedad(obj, "nombre")).toBe("Ana");
    expect(obtenerPropiedad(obj, "edad")).toBe(30);
  });

  
// Pruebas
test('agregarPropiedad debería agregar una nueva propiedad al objeto', () => {
    const obj = { nombre: "Carlos" };
    expect(agregarPropiedad(obj, "edad", 28)).toEqual({ nombre: "Carlos", edad: 28 });
  });
  

  // Pruebas
test('eliminarPropiedad debería eliminar una propiedad del objeto', () => {
    const obj = { nombre: "Luis", ciudad: "Lima" };
    expect(eliminarPropiedad(obj, "ciudad")).toEqual({ nombre: "Luis" });
  });

  // Pruebas
test('tienePropiedad debería verificar si el objeto tiene una propiedad', () => {
    const obj = { nombre: "Marta", edad: 22 };
    expect(tienePropiedad(obj, "nombre")).toBe(true);
    expect(tienePropiedad(obj, "ciudad")).toBe(false);
  });


  // Pruebas
  test('contarPropiedades debería devolver el número de propiedades del objeto', () => {
    const obj = { nombre: "Pedro", edad: 32, ciudad: "Sevilla" };
    expect(contarPropiedades(obj)).toBe(3);
  });


  // Pruebas
test('copiarObjeto debería devolver una copia exacta del objeto', () => {
    const obj = { nombre: "Ana", edad: 30 };
    expect(copiarObjeto(obj)).toEqual(obj);
  });

  test('fusionarObjetos debería combinar dos objetos en uno', () => {
    const obj1 = { nombre: "Sara" };
    const obj2 = { edad: 27 };
    expect(fusionarObjetos(obj1, obj2)).toEqual({ nombre: "Sara", edad: 27 });
  });
  


   // Pruebas
   test('encontrarElemento debería verificar si el elemento existe', () => {
    expect(encontrarElemento([1, 2, 3], 2)).toBe(true);
    expect(encontrarElemento([1, 2, 3], 5)).toBe(false);
  });


    // Pruebas
    test('sumarElementos debería devolver la suma de los elementos', () => {
        expect(sumarElementos([1, 2, 3])).toBe(6);
      });


        // Pruebas
  test('obtenerPrimerElemento debería devolver el primer elemento del array', () => {
    expect(obtenerPrimerElemento([1, 2, 3])).toBe(1);
    expect(obtenerPrimerElemento(["a", "b", "c"])).toBe("a");
  });
  


  // Pruebas
  test('obtenerUltimoElemento debería devolver el último elemento del array', () => {
    expect(obtenerUltimoElemento([1, 2, 3])).toBe(3);
    expect(obtenerUltimoElemento(["a", "b", "c"])).toBe("c");
  });
  

    // Pruebas
    test('agregarElementoFinal debería agregar un elemento al final del array', () => {
        expect(agregarElementoFinal([1, 2], 3)).toEqual([1, 2, 3]);
        expect(agregarElementoFinal(["a", "b"], "c")).toEqual(["a", "b", "c"]);
      });
  
      
        
  // Pruebas
  test('eliminarPrimerElemento debería eliminar el primer elemento del array', () => {
    expect(eliminarPrimerElemento([1, 2, 3])).toEqual([2, 3]);
    expect(eliminarPrimerElemento(["a", "b", "c"])).toEqual(["b", "c"]);
  });
  

    
  // Pruebas
  test('filtrarMayores debería devolver números mayores al valor dado', () => {
    expect(filtrarMayores([1, 5, 8, 10], 5)).toEqual([8, 10]);
    expect(filtrarMayores([2, 3, 4], 3)).toEqual([4]);
  });
  
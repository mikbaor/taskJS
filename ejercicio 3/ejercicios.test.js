const { 
    filtrarNombresLargos,
    obtenerPrimerasPalabras,
    dividirEnPalabras,
    obtenerFraseCorta,
    capitalizarPalabras,
    convertirAArray,
    sumarNumeros,
    concatenarPalabras,
    filtrarPalabrasConA,
    filtrarPalindromos,
    normalizarCorreos
  } = require('./ArraysIntermedio1');

  const { gestionarPrestamos,
    recomendarPeliculas} = require('./ArraysIntermedio2');

const { actualizarMedicacion,
        aplicarOfertas,
        actualizarInventario,
        filtrarPublicaciones } = require('./ArraysIntermedio3');
  
  // Ajusta la ruta si es necesario
  
  describe('Funciones de utilidades', () => {
    test('filtrarNombresLargos debe devolver solo nombres con más de 5 letras', () => {
      expect(filtrarNombresLargos(["Ana", "Roberto", "Juan", "Guadalupe"])).toEqual(["Roberto", "Guadalupe"]);
    });
  
    test('obtenerPrimerasPalabras debe devolver solo las tres primeras palabras', () => {
      expect(obtenerPrimerasPalabras(["hola", "mundo", "javascript", "es", "genial"])).toEqual(["hola", "mundo", "javascript"]);
    });
  
    test('dividirEnPalabras debe separar un texto en un array de palabras', () => {
      expect(dividirEnPalabras("Programar es divertido y desafiante")).toEqual(["Programar", "es", "divertido", "y", "desafiante"]);
    });
  
    test('obtenerFraseCorta debe concatenar las tres primeras palabras', () => {
      expect(obtenerFraseCorta(["Me", "gusta", "aprender", "programación"])).toBe("Me gusta aprender");
    });
  
    test('capitalizarPalabras debe capitalizar la primera letra de cada palabra', () => {
      expect(capitalizarPalabras(["hola", "mundo", "javascript", "programación"])).toEqual(["Hola", "Mundo", "Javascript", "Programación"]);
    });
  
    test('convertirAArray debe convertir un string separado por comas en un array', () => {
      expect(convertirAArray("manzana,pera,plátano,naranja")).toEqual(["manzana", "pera", "plátano", "naranja"]);
    });
  
    test('sumarNumeros debe devolver la suma total de los números en un array', () => {
      expect(sumarNumeros([10, 20, 30, 40, 50])).toBe(150);
    });
  
    test('concatenarPalabras debe concatenar palabras en una sola cadena separada por espacios', () => {
      expect(concatenarPalabras(["JavaScript", "es", "un", "lenguaje", "poderoso"])).toBe("JavaScript es un lenguaje poderoso");
    });
  
    test('filtrarPalabrasConA debe devolver palabras que empiezan con "A" o "a"', () => {
      expect(filtrarPalabrasConA(["Arbol", "banana", "Avión", "perro"])).toEqual(["Arbol", "Avión"]);
    });
  
    test('filtrarPalindromos debe devolver solo los palíndromos', () => {
      expect(filtrarPalindromos(["Radar", "hola", "reconocer", "casa"])).toEqual(["Radar", "reconocer"]);
    });
  
    test('normalizarCorreos debe convertir los correos a minúsculas y reemplazar espacios con guiones bajos', () => {
      expect(normalizarCorreos(["Ejemplo@Correo.com", "Mi Correo@prueba.com"])).toEqual(["ejemplo@correo.com", "mi_correo@prueba.com"]);
    });
  });


  describe('gestionarPrestamos', () => {
    const librosIniciales = [
      { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
      { id: 2, titulo: "Rayuela", prestado: true, multa: 5 }
    ];
  
    test('Prestar un libro existente', () => {
      const resultado = gestionarPrestamos(librosIniciales, 1, 0, 'prestar');
      expect(resultado).toEqual([
        { id: 1, titulo: "Cien años de soledad", prestado: true, multa: 0 },
        { id: 2, titulo: "Rayuela", prestado: true, multa: 5 }
      ]);
    });
  
    test('Devolver libro con retraso menor a 7 días', () => {
      const resultado = gestionarPrestamos(librosIniciales, 2, 5, 'devolver');
      expect(resultado).toEqual([
        { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
        { id: 2, titulo: "Rayuela", prestado: false, multa: 0 }
      ]);
    });
  
    test('Devolver libro con retraso mayor a 7 días', () => {
      const resultado = gestionarPrestamos(librosIniciales, 2, 10, 'devolver');
      expect(resultado).toEqual([
        { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
        { id: 2, titulo: "Rayuela", prestado: false, multa: 6 } // (10-7)*2=6
      ]);
    });
  
    test('ID inexistente no modifica el array', () => {
      const resultado = gestionarPrestamos(librosIniciales, 99, 0, 'prestar');
      expect(resultado).toEqual(librosIniciales);
    });
  });


  describe('gestionarPrestamos', () => {
    const librosIniciales = [
      { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
      { id: 2, titulo: "Rayuela", prestado: true, multa: 5 }
    ];
  
    test('Prestar un libro existente', () => {
      const resultado = gestionarPrestamos(librosIniciales, 1, 0, 'prestar');
      expect(resultado).toEqual([
        { id: 1, titulo: "Cien años de soledad", prestado: true, multa: 0 },
        { id: 2, titulo: "Rayuela", prestado: true, multa: 5 }
      ]);
    });
  
    test('Devolver libro con retraso menor a 7 días', () => {
      const resultado = gestionarPrestamos(librosIniciales, 2, 5, 'devolver');
      expect(resultado).toEqual([
        { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
        { id: 2, titulo: "Rayuela", prestado: false, multa: 0 }
      ]);
    });
  
    test('Devolver libro con retraso mayor a 7 días', () => {
      const resultado = gestionarPrestamos(librosIniciales, 2, 10, 'devolver');
      expect(resultado).toEqual([
        { id: 1, titulo: "Cien años de soledad", prestado: false, multa: 0 },
        { id: 2, titulo: "Rayuela", prestado: false, multa: 6 } // (10-7)*2=6
      ]);
    });
  
    test('ID inexistente no modifica el array', () => {
      const resultado = gestionarPrestamos(librosIniciales, 99, 0, 'prestar');
      expect(resultado).toEqual(librosIniciales);
    });
  });


  describe('actualizarMedicacion', () => {
    const pacientesIniciales = [
      {id: 1, nombre: "María", medicamentos: [{nombre: "Paracetamol", dosis: "500mg"}]},
      {id: 2, nombre: "Juan", medicamentos: [{nombre: "Ibuprofeno", dosis: "400mg"}]}
    ];
  
    test('Actualizar dosis de medicamento existente', () => {
      const resultado = actualizarMedicacion(pacientesIniciales, 1, "Paracetamol", "750mg");
      expect(resultado[0].medicamentos).toEqual([{nombre: "Paracetamol", dosis: "750mg"}]);
    });
  
    test('Agregar nuevo medicamento a paciente existente', () => {
      const resultado = actualizarMedicacion(pacientesIniciales, 2, "Omeprazol", "20mg");
      expect(resultado[1].medicamentos).toHaveLength(2);
      expect(resultado[1].medicamentos[1]).toEqual({nombre: "Omeprazol", dosis: "20mg"});
    });
  
    test('Paciente no existente no modifica el array', () => {
      const resultado = actualizarMedicacion(pacientesIniciales, 99, "Aspirina", "100mg");
      expect(resultado).toEqual(pacientesIniciales);
    });
  
    test('No modifica el array original', () => {
      const copiaOriginal = [...pacientesIniciales];
      actualizarMedicacion(pacientesIniciales, 1, "Paracetamol", "750mg");
      expect(pacientesIniciales).toEqual(copiaOriginal);
    });
  });


  describe('aplicarOfertas', () => {
    const productosIniciales = [
      {id: 1, nombre: "Zapatos", stock: 3, precio: 50},
      {id: 2, nombre: "Camisa", stock: 10, precio: 30}
    ];
  
    test('Aplicar descuento a producto con stock bajo', () => {
      const resultado = aplicarOfertas(productosIniciales, 5, 20);
      expect(resultado[0].precio).toBe(40); // 50 * 0.8
      expect(resultado[0].enOferta).toBe(true);
    });
  
    test('No modificar productos con stock suficiente', () => {
      const resultado = aplicarOfertas(productosIniciales, 5, 20);
      expect(resultado[1].precio).toBe(30);
      expect(resultado[1].enOferta).toBeUndefined();
    });
  
    test('Mantener inmutabilidad del array original', () => {
      const copiaOriginal = [...productosIniciales];
      aplicarOfertas(productosIniciales, 5, 20);
      expect(productosIniciales).toEqual(copiaOriginal);
    });
  
    test('Manejar array vacío', () => {
      expect(aplicarOfertas([], 5, 20)).toEqual([]);
    });
  });

  describe('filtrarPublicaciones', () => {
    const publicacionesIniciales = [
      { id: 1, texto: "¡Nuevo post!", likes: 150, hashtags: ["#SocialMedia", "#Tech"] },
      { id: 2, texto: "Actualización importante", likes: 80, hashtags: ["#Noticias", "#Tech"] },
      { id: 3, texto: "Oferta especial", likes: 200, hashtags: ["#SocialMedia", "#Ofertas"] },
      { id: 4, texto: "Evento próximo", likes: 300, hashtags: ["#Eventos", "#SocialMedia"] },
      { id: 5, texto: "Consejos útiles", likes: 50, hashtags: ["#Consejos"] }
    ];
  
    test('Filtrar publicaciones con hashtag específico y likes mínimos', () => {
      const resultado = filtrarPublicaciones(publicacionesIniciales, "#SocialMedia", 100);
  
      // Verificar que solo se devuelven las publicaciones con el hashtag y likes >= 100
      expect(resultado).toEqual([
        { id: 4, texto: "Evento próximo", likes: 300, hashtags: ["#Eve", "#Soc"] },
        { id: 3, texto: "Oferta especial", likes: 200, hashtags: ["#Soc", "#Ofe"] },
        { id: 1, texto: "¡Nuevo post!", likes: 150, hashtags: ["#Soc", "#Tec"] }
      ]);
    });
  
    test('Truncar hashtags a los primeros 3 caracteres', () => {
      const resultado = filtrarPublicaciones(publicacionesIniciales, "#SocialMedia", 100);
  
      // Verificar que los hashtags están truncados correctamente
      expect(resultado[0].hashtags).toEqual(["#Eve", "#Soc"]); // "#Eventos" -> "#Eve", "#SocialMedia" -> "#So"
      expect(resultado[1].hashtags).toEqual(["#Soc", "#Ofe"]);  // "#SocialMedia" -> "#So", "#Ofertas" -> "#Of"
      expect(resultado[2].hashtags).toEqual(["#Soc", "#Tec"]);  // "#SocialMedia" -> "#So", "#Tech" -> "#Te"
    });
  
    test('Ordenar publicaciones por likes en orden descendente', () => {
      const resultado = filtrarPublicaciones(publicacionesIniciales, "#SocialMedia", 100);
  
      // Verificar que las publicaciones están ordenadas por likes de mayor a menor
      expect(resultado[0].likes).toBe(300);
      expect(resultado[1].likes).toBe(200);
      expect(resultado[2].likes).toBe(150);
    });
  
    test('Devolver array vacío si no hay coincidencias', () => {
      const resultado = filtrarPublicaciones(publicacionesIniciales, "#Deportes", 50);
  
      // Verificar que no hay publicaciones con el hashtag "#Deportes"
      expect(resultado).toEqual([]);
    });
  
    test('Mantener el array original sin modificar', () => {
      const copiaOriginal = [...publicacionesIniciales];
      filtrarPublicaciones(publicacionesIniciales, "#SocialMedia", 100);
  
      // Verificar que el array original no ha sido modificado
      expect(publicacionesIniciales).toEqual(copiaOriginal);
    });
  
    test('Manejar publicaciones sin hashtags', () => {
      const publicacionesSinHashtags = [
        { id: 6, texto: "Publicación sin hashtags", likes: 100, hashtags: [] }
      ];
  
      const resultado = filtrarPublicaciones(publicacionesSinHashtags, "#SocialMedia", 50);
  
      // Verificar que no se incluyen publicaciones sin hashtags
      expect(resultado).toEqual([]);
    });
  
    test('Manejar publicaciones con hashtag pero sin suficientes likes', () => {
      const resultado = filtrarPublicaciones(publicacionesIniciales, "#Tech", 200);
  
      // Verificar que no se incluyen publicaciones con menos de 200 likes
      expect(resultado).toEqual([]);
    });
  });


  describe('actualizarInventario', () => {
    const ingredientesIniciales = [
      { id: 1, nombre: "Harina", cantidad: 10 },
      { id: 2, nombre: "Azúcar", cantidad: 5 },
      { id: 3, nombre: "Sal", cantidad: 2 }
    ];
  
    test('Reducir cantidad de un ingrediente existente', () => {
      const resultado = actualizarInventario(ingredientesIniciales, 1, 3);
  
      // Verificar que la cantidad de harina se redujo correctamente
      expect(resultado).toEqual([
        { id: 1, nombre: "Harina", cantidad: 7 },
        { id: 2, nombre: "Azúcar", cantidad: 5 },
        { id: 3, nombre: "Sal", cantidad: 2 }
      ]);
    });
  
    test('Eliminar ingrediente si la cantidad llega a 0', () => {
      const resultado = actualizarInventario(ingredientesIniciales, 3, 2);
  
      // Verificar que la sal se eliminó porque su cantidad llegó a 0
      expect(resultado).toEqual([
        { id: 1, nombre: "Harina", cantidad: 10 },
        { id: 2, nombre: "Azúcar", cantidad: 5 }
      ]);
    });
  
    test('Eliminar ingrediente si la cantidad es negativa', () => {
      const resultado = actualizarInventario(ingredientesIniciales, 2, 10);
  
      // Verificar que el azúcar se eliminó porque su cantidad es negativa
      expect(resultado).toEqual([
        { id: 1, nombre: "Harina", cantidad: 10 },
        { id: 3, nombre: "Sal", cantidad: 2 }
      ]);
    });
  
    test('No modificar inventario si el ingrediente no existe', () => {
      const resultado = actualizarInventario(ingredientesIniciales, 99, 5);
  
      // Verificar que el inventario no cambió
      expect(resultado).toEqual(ingredientesIniciales);
    });
  
    test('Mantener el array original sin modificar', () => {
      const copiaOriginal = [...ingredientesIniciales];
      actualizarInventario(ingredientesIniciales, 1, 3);
  
      // Verificar que el array original no ha sido modificado
      expect(ingredientesIniciales).toEqual(copiaOriginal);
    });
  
    test('Manejar array vacío', () => {
      const resultado = actualizarInventario([], 1, 5);
  
      // Verificar que devuelve un array vacío
      expect(resultado).toEqual([]);
    });
  
    test('Manejar cantidadUsada negativa', () => {
      const resultado = actualizarInventario(ingredientesIniciales, 1, -3);
  
      // Verificar que la cantidad de harina aumenta si cantidadUsada es negativa
      expect(resultado).toEqual([
        { id: 1, nombre: "Harina", cantidad: 13 },
        { id: 2, nombre: "Azúcar", cantidad: 5 },
        { id: 3, nombre: "Sal", cantidad: 2 }
      ]);
    });
  });

  describe('recomendarPeliculas', () => {
    const peliculasIniciales = [
      { titulo: "Inception", generos: ["accion", "ciencia ficcion"], rating: 8.8 },
      { titulo: "Titanic", generos: ["drama"], rating: 7.9 },
      { titulo: "Avengers", generos: ["accion"], rating: 8.3 },
      { titulo: "Interstellar", generos: ["ciencia ficcion"], rating: 8.6 },
      { titulo: "Gladiador", generos: ["accion", "drama"], rating: 8.5 },
      { titulo: "Jurassic Park", generos: ["aventura"], rating: 8.1 },
      { titulo: "Mad Max", generos: ["accion"], rating: 8.0 },
      { titulo: "The Dark Knight", generos: ["accion", "drama"], rating: 9.0 }
    ];
  
    test('Filtrar películas por género y rating mínimo', () => {
      const resultado = recomendarPeliculas(peliculasIniciales, "accion", 8.0);
  
      // Verificar que solo se devuelven películas de acción con rating >= 8.0
      expect(resultado.recomendaciones).toEqual([
        { titulo: "The Dark Knight", generos: ["accion", "drama"], rating: 9.0 },
        { titulo: "Inception", generos: ["accion", "ciencia ficcion"], rating: 8.8 },
        { titulo: "Gladiador", generos: ["accion", "drama"], rating: 8.5 },
        { titulo: "Avengers", generos: ["accion"], rating: 8.3 },
        { titulo: "Mad Max", generos: ["accion"], rating: 8.0 }
      ]);
    });
  
    test('Calcular el promedio del rating de las películas recomendadas', () => {
      const resultado = recomendarPeliculas(peliculasIniciales, "accion", 8.0);
  
      // Verificar que el promedio se calcula correctamente
      const promedioEsperado = (9.0 + 8.8 + 8.5 + 8.3 + 8.0) / 5;
      expect(resultado.promedio).toBeCloseTo(promedioEsperado);
    });
  
    test('Limitar a 5 películas recomendadas', () => {
      const resultado = recomendarPeliculas(peliculasIniciales, "accion", 8.0);
  
      // Verificar que solo se devuelven 5 películas
      expect(resultado.recomendaciones.length).toBe(5);
    });
  
    test('Devolver array vacío si no hay coincidencias', () => {
      const resultado = recomendarPeliculas(peliculasIniciales, "terror", 5.0);
  
      // Verificar que no hay películas de terror
      expect(resultado.recomendaciones).toEqual([]);
      expect(resultado.promedio).toBe(0);
    });
  
    test('Mantener el array original sin modificar', () => {
      const copiaOriginal = [...peliculasIniciales];
      recomendarPeliculas(peliculasIniciales, "accion", 8.0);
  
      // Verificar que el array original no ha sido modificado
      expect(peliculasIniciales).toEqual(copiaOriginal);
    });
  
    test('Manejar array vacío', () => {
      const resultado = recomendarPeliculas([], "accion", 8.0);
  
      // Verificar que devuelve un objeto con array vacío y promedio 0
      expect(resultado).toEqual({ recomendaciones: [], promedio: 0 });
    });
  
    test('Manejar películas sin el género especificado', () => {
      const resultado = recomendarPeliculas(peliculasIniciales, "musical", 5.0);
  
      // Verificar que no hay películas de musical
      expect(resultado.recomendaciones).toEqual([]);
      expect(resultado.promedio).toBe(0);
    });
  
    test('Manejar películas con rating menor al mínimo', () => {
      const resultado = recomendarPeliculas(peliculasIniciales, "accion", 9.0);
  
      // Verificar que solo se devuelven películas con rating >= 9.0
      expect(resultado.recomendaciones).toEqual([
        { titulo: "The Dark Knight", generos: ["accion", "drama"], rating: 9.0 }
      ]);
      expect(resultado.promedio).toBe(9.0);
    });
  });
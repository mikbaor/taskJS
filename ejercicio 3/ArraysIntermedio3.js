
// 1. Gestión de Medicamentos en Hospital
// Descripción:
// Una clínica necesita actualizar los registros de medicación de sus pacientes.
// Parámetros:
// pacientes: Array de objetos paciente (id, nombre, medicamentos: array de {nombre, dosis})
// idPaciente: Número (ID del paciente)
// medicamento: String (nombre medicamento)
// dosis: String (nueva dosis)
// Acciones:
// Si el paciente existe y ya tiene el medicamento: actualizar la dosis
// Si el paciente existe pero no tiene el medicamento: agregarlo
// Si el paciente no existe: no hacer cambios
// Retorna:
// Nuevo array de pacientes actualizado

// let pacientes = [
//     {id: 1, nombre: "María", medicamentos: [{nombre: "Paracetamol", dosis: "500mg"}]}
//   ];

const actualizarMedicacion = (pacientes, idPaciente, medicamento, dosis) => {

  const nuevosPacientes = pacientes.map(paciente => {
    if (paciente.id === idPaciente) {
      const medicamentoExistente = paciente.medicamentos.find(
        medicamentoActual => medicamentoActual.nombre === medicamento
      );

      if (medicamentoExistente) {
        return {
          ...paciente,
          medicamentos: paciente.medicamentos.map(medicamentoActual =>
            medicamentoActual.nombre === medicamento
              ? { ...medicamentoActual, dosis }
              : medicamentoActual
          )
        };
      } else {
        return {
          ...paciente,
          medicamentos: [
            ...paciente.medicamentos,
            { nombre: medicamento, dosis }
          ]
        };
      }
    }
    return paciente;
  });

  return nuevosPacientes;
};

// ejemplos
let pacientes = [
  { id: 1, nombre: "María", medicamentos: [{ nombre: "Paracetamol", dosis: "500mg" }] },
  { id: 2, nombre: "Juan", medicamentos: [] }
];

// actualiza la dosis de un medicamento existente
let resultado1 = actualizarMedicacion(pacientes, 1, "Paracetamol", "1000mg");
console.log(resultado1);

// agregar un nuevo medicamento
let resultado2 = actualizarMedicacion(pacientes, 2, "Ibuprofeno", "400mg");
console.log(resultado2);

// paciente no existe
let resultado3 = actualizarMedicacion(pacientes, 3, "Aspirina", "500mg");
console.log(resultado3);









    



    // 2. Sistema de Ofertas para Tienda Online
    // Descripción:
    // Una tienda online quiere aplicar descuentos a productos con bajo stock.
    // Parámetros:
    // productos: Array de objetos producto (id, nombre, stock, precio)
    // umbralStock: Número (stock mínimo para considerar bajo inventario)
    // descuento: Número (porcentaje de descuento a aplicar)
    // Acciones:
    // Identificar productos con stock menor al umbral
    // Aplicar descuento a estos productos (precio = precio * (1 - descuento/100))
    // Marcar productos con nuevo campo enOferta: true
    // Retorna:
    // Array modificado con productos en oferta y nuevos precios

    // let productos = [
    //     {id: 1, nombre: "Zapatos", stock: 3, precio: 50}
    //   ];

    const aplicarOfertas = (productos, umbralStock, descuento) => {
      const productosActualizados = productos.map(producto => {
        if (producto.stock < umbralStock) {
          const nuevoPrecio = producto.precio * (1 - descuento / 100);
          return {
            ...producto,
            precio: nuevoPrecio,
            enOferta: true
          };
        }
        return producto;
      });
      return productosActualizados;
    };
    
    // Ejemplo de uso:
    let productos = [
      { id: 1, nombre: "Zapatos", stock: 3, precio: 50 },
      { id: 2, nombre: "Camisetas", stock: 10, precio: 20 },
      { id: 3, nombre: "Pantalones", stock: 2, precio: 40 }
    ];
    
    let resultado = aplicarOfertas(productos, 5, 20); // umbralStock = 5, descuento = 20
    console.log(resultado);












 

// 3. Gestión de Eventos en Red Social
// Una red social necesita analizar interacciones en publicaciones.
// Parámetros:
// publicaciones: Array de objetos publicación (id, texto, likes, hashtags)
// hashtagFiltro: String (hashtag a buscar)
// minLikes: Número (mínimo de likes para considerar popular)
// Acciones:
// Filtrar publicaciones que contengan el hashtag y tengan likes >= minLikes
// Ordenar resultados por likes (descendente)
// Extraer primeros 3 caracteres de cada hashtag
// Retorna:
// Array modificado con publicaciones filtradas y hashtags truncados

// let publicaciones = [
//     {id: 1, texto: "¡Nuevo post!", likes: 150, hashtags: ["#SocialMedia"]}
//   ];

const filtrarPublicaciones = (publicaciones, hashtagFiltro, minLikes) => {

  const publicacionesFiltradas = publicaciones.filter(publicacion =>
    publicacion.hashtags.includes(hashtagFiltro) && publicacion.likes >= minLikes
  );
  const publicacionesOrdenadas = publicacionesFiltradas.sort((a, b) => b.likes - a.likes);
  const publicacionesConHashtagsTruncados = publicacionesOrdenadas.map(publicacion => ({
    ...publicacion,
    hashtags: publicacion.hashtags.map(hashtag => hashtag.slice(0, 4)) // Truncar todos los hashtags
  }));
  return publicacionesConHashtagsTruncados;
};

let publicaciones = [
  { id: 1, texto: "Post 1", likes: 150, hashtags: ["#Eventos", "#SocialMedia"] },
  { id: 2, texto: "Post 2", likes: 200, hashtags: ["#SocialMedia", "#Ofertas"] },
  { id: 3, texto: "Post 3", likes: 50, hashtags: ["#Tech", "#Gaming"] }
];

let resultados = filtrarPublicaciones(publicaciones, "#SocialMedia", 100);
console.log(resultados);















// 4. Gestión de Inventario en Restaurante
// Descripción:
// Un restaurante quiere actualizar la cantidad de ingredientes disponibles en su cocina.
// Parámetros:

// ingredientes: Array de objetos { id, nombre, cantidad }
// idIngrediente: Número (ID del ingrediente a actualizar)
// cantidadUsada: Número (cantidad a descontar)
// Acciones:
// Si el ingrediente existe, reducir la cantidad en cantidadUsada.
// Si la cantidad llega a 0 o menos, eliminar el ingrediente del inventario.
// Retorna un nuevo array con los ingredientes actualizados.

const actualizarInventario = (ingredientes, idIngrediente, cantidadUsada) => {

  const inventarioActualizado = ingredientes
    .map(ingrediente => {
      if (ingrediente.id === idIngrediente) {
        const nuevaCantidad = ingrediente.cantidad - cantidadUsada;
        return nuevaCantidad > 0
          ? { ...ingrediente, cantidad: nuevaCantidad }
          : null;
      }
      return ingrediente;
    })
    .filter(ingrediente => ingrediente !== null);

  return inventarioActualizado;
};

let ingredientes = [
  { id: 1, nombre: "Tomate", cantidad: 10 },
  { id: 2, nombre: "Cebolla", cantidad: 5 },
  { id: 3, nombre: "Ajo", cantidad: 3 }
];

let result = actualizarInventario(ingredientes, 2, 3);
console.log(resultado);









module.exports ={ 
    actualizarMedicacion,
    aplicarOfertas,
    filtrarPublicaciones,
    actualizarInventario
  }
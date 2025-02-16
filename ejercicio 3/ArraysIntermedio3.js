
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
      
    };



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

 const aplicarOfertas = (productos, stock, descuento) => {
     
 }



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
    
}

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
    
}


module.exports ={ 
    actualizarMedicacion,
    aplicarOfertas,
    filtrarPublicaciones,
    actualizarInventario
  }
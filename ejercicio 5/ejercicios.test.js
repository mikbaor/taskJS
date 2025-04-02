// promiseUtils.test.js

const {
    promesaSaludo,
    promesaError,
    promesaConRetraso,
    encadenarPromesas,
    promesasParalelas,
    promesaMasRapida,
    evaluarNumero,
    saludarAsync,
    sumarNumerosAsync,
    transformarTextoAsync
  } = require('./Promesas1');

  const {
    fetchPosts,
    fetchPostById,
    createPost,
    updatePost,
    deletePost,
    fetchComments,
    fetchUser,
    fetchAlbums,
    fetchPhotos,
    fetchTodos
  } = require('./Promesas2');


  const {

    fetchUserNameById,
    fetchCommentsEmails,
    fetchPostTitleAndBody,
    fetchAlbumTitles,
    fetchPhotoThumbnailUrls,
    fetchCompletedTodos,
    createUserAndReturnId,
    updatePostReturnTitle,
    deletePostAndConfirm
  } = require('./Promesas3');
  
  
  describe("Pruebas de Promesas", () => {
  
    test("promesaSaludo resuelve con el mensaje correcto", () => {
      return expect(promesaSaludo()).resolves.toBe("¡Hola, promesa cumplida!");
    });
  
    test("promesaError rechaza con el error esperado", () => {
      return expect(promesaError()).rejects.toBe("Error intencional");
    });
  
    test("promesaConRetraso resuelve después del tiempo indicado", async () => {
      const mensaje = "Mensaje con retraso";
      const resultado = await promesaConRetraso(mensaje, 200);
      expect(resultado).toBe(mensaje);
    });
  
    test("encadenarPromesas multiplica el número por 3", async () => {
      const resultado = await encadenarPromesas(4);
      expect(resultado).toBe(12);
    });
  
    test("promesasParalelas devuelve un array con ambos resultados", async () => {
      const resultados = await promesasParalelas();
      expect(resultados).toEqual(["Primera", "Segunda"]);
    });
  
    test("promesaMasRapida devuelve el resultado de la promesa que se resuelve primero", async () => {
      const resultado = await promesaMasRapida();
      expect(resultado).toBe("Rápida");
    });
  
    test("evaluarNumero resuelve si el número es mayor a 10", () => {
      return expect(evaluarNumero(15)).resolves.toBe("El número es mayor a 10");
    });
  
    test("evaluarNumero rechaza si el número es 10 o menor", () => {
      return expect(evaluarNumero(5)).rejects.toBe("El número es 10 o menor");
    });
  
    test("saludarAsync retorna el mensaje correcto usando async/await", async () => {
      const saludo = await saludarAsync();
      expect(saludo).toBe("¡Hola, promesa cumplida!");
    });
  
    test("sumarNumerosAsync suma correctamente el array de números", async () => {
      const suma = await sumarNumerosAsync([1, 2, 3, 4, 5]);
      expect(suma).toBe(15);
    });
  
    test("transformarTextoAsync transforma el texto en array de palabras", async () => {
      const texto = "Aprender promesas es divertido";
      const palabras = await transformarTextoAsync(texto);
      expect(palabras).toEqual(["Aprender", "promesas", "es", "divertido"]);
    });
  
  });
  

  describe("Pruebas con Axios y Async/Await", () => {

    test("fetchPosts debe retornar un array de posts", async () => {
      const posts = await fetchPosts();
      expect(Array.isArray(posts)).toBe(true);
      expect(posts.length).toBeGreaterThan(0);
    });
  
    test("fetchPostById debe retornar un post con el id solicitado", async () => {
      const post = await fetchPostById(1);
      expect(post).toHaveProperty("id", 1);
    });
  
    test("createPost debe retornar un objeto con la información del nuevo post", async () => {
      const nuevoPost = { title: "Test", body: "Contenido de prueba", userId: 1 };
      const postCreado = await createPost(nuevoPost);
      // JSONPlaceholder simula la creación asignando un id
      expect(postCreado).toHaveProperty("id");
      expect(postCreado.title).toBe(nuevoPost.title);
    });
  
    test("updatePost debe retornar un objeto actualizado", async () => {
      const updateData = { title: "Título actualizado", body: "Contenido actualizado", userId: 1 };
      const postActualizado = await updatePost(1, updateData);
      expect(postActualizado.title).toBe(updateData.title);
    });
  
    test("deletePost debe retornar un objeto vacío o información de eliminación", async () => {
      const resultado = await deletePost(1);
      // En JSONPlaceholder, delete retorna un objeto vacío
      expect(resultado).toEqual({});
    });
  
    test("fetchComments debe retornar un array de comentarios para el post indicado", async () => {
      const comentarios = await fetchComments(1);
      expect(Array.isArray(comentarios)).toBe(true);
      // Se espera que todos los comentarios pertenezcan al post 1
      comentarios.forEach(c => expect(c.postId).toBe(1));
    });
  
    test("fetchUser debe retornar un usuario con el id solicitado", async () => {
      const user = await fetchUser(1);
      expect(user).toHaveProperty("id", 1);
    });
  
    test("fetchAlbums debe retornar un array de álbumes", async () => {
      const albums = await fetchAlbums();
      expect(Array.isArray(albums)).toBe(true);
      expect(albums.length).toBeGreaterThan(0);
    });
  
    test("fetchPhotos debe retornar un array de fotos para el álbum indicado", async () => {
      const photos = await fetchPhotos(1);
      expect(Array.isArray(photos)).toBe(true);
      // Se espera que todas las fotos pertenezcan al álbum 1
      photos.forEach(photo => expect(photo.albumId).toBe(1));
    });
  
    test("fetchTodos debe retornar un array de tareas", async () => {
      const todos = await fetchTodos();
      expect(Array.isArray(todos)).toBe(true);
      expect(todos.length).toBeGreaterThan(0);
    });
  
  });



describe("Pruebas con Axios y transformación de respuestas", () => {


  test("fetchUserNameById retorna el nombre del usuario", async () => {
    const nombre = await fetchUserNameById(1);
    expect(typeof nombre).toBe("string");
    expect(nombre).not.toHaveLength(0);
  });

  test("fetchCommentsEmails retorna un array de emails", async () => {
    const emails = await fetchCommentsEmails(1);
    expect(Array.isArray(emails)).toBe(true);
    emails.forEach(email => expect(email).toMatch(/.+@.+\..+/));
  });

  test("fetchPostTitleAndBody retorna un objeto con title y body", async () => {
    const post = await fetchPostTitleAndBody(1);
    expect(post).toHaveProperty("title");
    expect(post).toHaveProperty("body");
  });

  test("fetchAlbumTitles retorna un array de títulos de álbumes", async () => {
    const titulos = await fetchAlbumTitles();
    expect(Array.isArray(titulos)).toBe(true);
    expect(titulos[0]).toBeDefined();
  });

  test("fetchPhotoThumbnailUrls retorna un array de URLs de thumbnails", async () => {
    const urls = await fetchPhotoThumbnailUrls(1);
    expect(Array.isArray(urls)).toBe(true);
    urls.forEach(url => expect(url).toMatch(/^https?:\/\//));
  });

  test("fetchCompletedTodos retorna solo las tareas completadas", async () => {
    const todosCompletados = await fetchCompletedTodos();
    expect(Array.isArray(todosCompletados)).toBe(true);
    todosCompletados.forEach(todo => expect(todo.completed).toBe(true));
  });

  test("createUserAndReturnId retorna el ID del usuario creado", async () => {
    const nuevoUsuario = { name: "Juan Pérez", username: "juanp", email: "juanp@example.com" };
    const id = await createUserAndReturnId(nuevoUsuario);
    expect(typeof id).toBe("number");
  });

  test("updatePostReturnTitle retorna solo el título actualizado", async () => {
    const updateData = { title: "Título Modificado", body: "Contenido actualizado", userId: 1 };
    const nuevoTitulo = await updatePostReturnTitle(1, updateData);
    expect(nuevoTitulo).toBe(updateData.title);
  });

  test("deletePostAndConfirm retorna un objeto de confirmación", async () => {
    const confirmacion = await deletePostAndConfirm(1);
    expect(confirmacion).toEqual({ message: "Post con id 1 eliminado" });
  });

});

// axiosUtils.js
const axios = require("axios");

// axios sirve para realizar peticiones http
// su forma de uso es axios.get(url)
// axios.post(url, data)
// axios.put(url, data)
// axios.delete(url)

/**
 * 1. fetchPosts:
 * Realiza una petición GET para obtener todos los posts.
 * debe retornar el array que se recibe en este enpoint
 * https://jsonplaceholder.typicode.com/posts
 */
const fetchPosts = async () => {
  
};

/**
 * 2. fetchPostById:
 * Realiza una petición GET para obtener un post específico por id.
 * https://jsonplaceholder.typicode.com/posts/${id}
 */
const fetchPostById = async (id) => {

};

/**
 * 3. createPost:
 * Realiza una petición POST para crear un nuevo post.
 * https://jsonplaceholder.typicode.com/posts
 * debe retornar el post creado
 */
const createPost = async (postData) => {

};

/**
 * 4. updatePost:
 * Realiza una petición PUT para actualizar un post existente.
 * https://jsonplaceholder.typicode.com/posts/${id}
 * debe retornar el post actualizado
 */
const updatePost = async (id, updateData) => {

};

/**
 * 5. deletePost:
 * Realiza una petición DELETE para eliminar un post por id.
 * https://jsonplaceholder.typicode.com/posts/${id}
 * debe retornar el post eliminado
 */
const deletePost = async (id) => {

};

/**
 * 6. fetchComments:
 * Realiza una petición GET para obtener los comentarios de un post específico.
 * https://jsonplaceholder.typicode.com/comments?postId=${id}
 * debe retornar el array de comentarios
 */
const fetchComments = async (postId) => {

};

/**
 * 7. fetchUser:
 * Realiza una petición GET para obtener la información de un usuario por id.
 * https://jsonplaceholder.typicode.com/users/${id}
 * debe retornar el usuario
 */
const fetchUser = async (id) => {

};

/**
 * 8. fetchAlbums:
 * Realiza una petición GET para obtener todos los álbumes.
 * debe retornar el array de álbumes
 * https://jsonplaceholder.typicode.com/albums
 */
const fetchAlbums = async () => {

};

/**
 * 9. fetchPhotos:
 * Realiza una petición GET para obtener las fotos de un álbum específico.
 * https://jsonplaceholder.typicode.com/photos?albumId=${albumId}
 * debe retornar el array de fotos
 */
const fetchPhotos = async (albumId) => {

};

/**
 * 10. fetchTodos:
 * Realiza una petición GET para obtener la lista de tareas (todos).
 * debe retornar el array de tareas
 * https://jsonplaceholder.typicode.com/todos
 */
const fetchTodos = async () => {

};

module.exports = {
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
};

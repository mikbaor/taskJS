// axiosTransformers.js
const axios = require("axios");



/**
 * 2. fetchUserNameById:
 * Realiza una petición GET para obtener un usuario por id y retorna solo su nombre.
 * https://jsonplaceholder.typicode.com/users/${id}
 * el nombre de la propiedad es name
 */
const fetchUserNameById = async (id) => {

};

/**
 * 3. fetchCommentsEmails:
 * Realiza una petición GET para obtener los comentarios de un post y retorna solo los correos de los comentaristas.
 * https://jsonplaceholder.typicode.com/comments?postId=${postId}
 * el nombre de la propiedad es email
 */
const fetchCommentsEmails = async (postId) => {

};

/**
 * 4. fetchPostTitleAndBody:
 * Realiza una petición GET para obtener un post por id y retorna un objeto solo con el título y el cuerpo.
 * title y body
 * ttps://jsonplaceholder.typicode.com/posts/${id}
 */
const fetchPostTitleAndBody = async (id) => {

};

/**
 * 5. fetchAlbumTitles:
 * Realiza una petición GET para obtener todos los álbumes y retorna un array con solo sus títulos.
 * el nombre de la propiedad es title
 * https://jsonplaceholder.typicode.com/albums"
 */
const fetchAlbumTitles = async () => {

};

/**
 * 6. fetchPhotoThumbnailUrls:
 * Realiza una petición GET para obtener las fotos de un álbum y retorna un array con solo las URLs de los thumbnails.
 * https://jsonplaceholder.typicode.com/photos?albumId=${albumId}
 * el nombre de la propiedad es thumbnailUrl
 */
const fetchPhotoThumbnailUrls = async (albumId) => {
 
};

/**
 * 7. fetchCompletedTodos:
 * Realiza una petición GET para obtener todas las tareas (todos) y retorna solo las que estén completadas.
 * https://jsonplaceholder.typicode.com/todos
 * el nombre de la propiedad es completed
 */
const fetchCompletedTodos = async () => {

};

/**
 * 8. createUserAndReturnId:
 * Realiza una petición POST para crear un usuario y retorna solo el ID del usuario creado.
 * https://jsonplaceholder.typicode.com/users
 * el nombre de la propiedad es id
 */
const createUserAndReturnId = async (userData) => {

};

/**
 * 9. updatePostReturnTitle:
 * Realiza una petición PUT para actualizar un post y retorna solo el título actualizado.
 * https://jsonplaceholder.typicode.com/posts/${id}
 * el nombre de la propiedad es title
 */
const updatePostReturnTitle = async (id, updateData) => {

};

/**
 * 10. deletePostAndConfirm:
 * Realiza una petición DELETE para eliminar un post y retorna un objeto con un mensaje de confirmación.
 * https://jsonplaceholder.typicode.com/posts/${id}
 * el nombre de la propiedad es message:Post con id ${id} eliminado
 */
const deletePostAndConfirm = async (id) => {

};

module.exports = {
  fetchUserNameById,
  fetchCommentsEmails,
  fetchPostTitleAndBody,
  fetchAlbumTitles,
  fetchPhotoThumbnailUrls,
  fetchCompletedTodos,
  createUserAndReturnId,
  updatePostReturnTitle,
  deletePostAndConfirm
};

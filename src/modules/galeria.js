// modules/galeria.js

const imagenes = [];

// Función para cargar una imagen en la galería
export function cargarImagen(url) {
  imagenes.push(url);
}

// Función para mostrar las imágenes en la página
export function mostrarGaleria() {
  const galeriaElement = document.getElementById('galeria');

  // Limpiamos el contenido de la galería
  galeriaElement.innerHTML = '';

  // Agregamos las imágenes a la galería
  imagenes.forEach((url) => {
    const imagenElement = document.createElement('img');
    imagenElement.src = url;
    galeriaElement.appendChild(imagenElement);
  });
}

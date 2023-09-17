// modules/listTareas.js

// Lista de tareas inicialmente vacía
let tareas = [];

// Función para agregar una tarea a la lista
export function agregarTarea(tarea) {
  tareas.push({ tarea, completada: false });
}

// Función para marcar una tarea como completada
export function marcarTareaComoCompletada(index) {
  if (index >= 0 && index < tareas.length) {
    tareas[index].completada = true;
  }
}

// Función para obtener la lista de tareas
export function obtenerListaDeTareas() {
  return tareas;
}

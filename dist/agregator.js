/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/agregator.js":
/*!**********************************!*\
  !*** ./src/modules/agregator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculos: () => (/* reexport module object */ _calculos_js__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   contrasenia: () => (/* reexport module object */ _contrasenia_js__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   conversor: () => (/* reexport module object */ _conversor_js__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   galeria: () => (/* reexport module object */ _galeria_js__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   listTareas: () => (/* reexport module object */ _listTareas_js__WEBPACK_IMPORTED_MODULE_1__)\n/* harmony export */ });\n/* harmony import */ var _calculos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculos.js */ \"./src/modules/calculos.js\");\n/* harmony import */ var _listTareas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listTareas.js */ \"./src/modules/listTareas.js\");\n/* harmony import */ var _conversor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversor.js */ \"./src/modules/conversor.js\");\n/* harmony import */ var _contrasenia_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contrasenia.js */ \"./src/modules/contrasenia.js\");\n/* harmony import */ var _galeria_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./galeria.js */ \"./src/modules/galeria.js\");\n// modules/agregator.js\r\n// modules/agregator.js\r\n// modules/agregator.js\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://parcial2dw/./src/modules/agregator.js?");

/***/ }),

/***/ "./src/modules/calculos.js":
/*!*********************************!*\
  !*** ./src/modules/calculos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   division: () => (/* binding */ division),\n/* harmony export */   multiplicacion: () => (/* binding */ multiplicacion),\n/* harmony export */   resta: () => (/* binding */ resta),\n/* harmony export */   suma: () => (/* binding */ suma)\n/* harmony export */ });\n// modules/calculos.js\r\n\r\n// Función para sumar dos números\r\nfunction suma(a, b) {\r\n    return a + b;\r\n  }\r\n  \r\n  // Función para restar dos números\r\n  function resta(a, b) {\r\n    return a - b;\r\n  }\r\n  \r\n  // Función para multiplicar dos números\r\n  function multiplicacion(a, b) {\r\n    return a * b;\r\n  }\r\n  \r\n  // Función para dividir dos números\r\n  function division(a, b) {\r\n    if (b === 0) {\r\n      throw new Error(\"No se puede dividir por cero.\");\r\n    }\r\n    return a / b;\r\n  }\r\n  \n\n//# sourceURL=webpack://parcial2dw/./src/modules/calculos.js?");

/***/ }),

/***/ "./src/modules/contrasenia.js":
/*!************************************!*\
  !*** ./src/modules/contrasenia.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generarContrasenia: () => (/* binding */ generarContrasenia)\n/* harmony export */ });\n// modules/contrasenia.js\r\n\r\n// Función para generar una contraseña aleatoria\r\nfunction generarContrasenia(longitud, usarLetras, usarNumeros, usarSimbolos) {\r\n    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';\r\n    const numeros = '0123456789';\r\n    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';\r\n  \r\n    let caracteresPermitidos = '';\r\n  \r\n    if (usarLetras) {\r\n      caracteresPermitidos += letras;\r\n    }\r\n  \r\n    if (usarNumeros) {\r\n      caracteresPermitidos += numeros;\r\n    }\r\n  \r\n    if (usarSimbolos) {\r\n      caracteresPermitidos += simbolos;\r\n    }\r\n  \r\n    let contrasenia = '';\r\n  \r\n    for (let i = 0; i < longitud; i++) {\r\n      const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);\r\n      contrasenia += caracteresPermitidos.charAt(randomIndex);\r\n    }\r\n  \r\n    return contrasenia;\r\n  }\r\n  \n\n//# sourceURL=webpack://parcial2dw/./src/modules/contrasenia.js?");

/***/ }),

/***/ "./src/modules/conversor.js":
/*!**********************************!*\
  !*** ./src/modules/conversor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\n// modules/conversor.js\r\n\r\n// Función para convertir de Celsius a Fahrenheit\r\nfunction celsiusToFahrenheit(celsius) {\r\n    return (celsius * 9/5) + 32;\r\n  }\r\n  \r\n  // Función para convertir de Fahrenheit a Celsius\r\n  function fahrenheitToCelsius(fahrenheit) {\r\n    return (fahrenheit - 32) * 5/9;\r\n  }\r\n  \n\n//# sourceURL=webpack://parcial2dw/./src/modules/conversor.js?");

/***/ }),

/***/ "./src/modules/galeria.js":
/*!********************************!*\
  !*** ./src/modules/galeria.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cargarImagen: () => (/* binding */ cargarImagen),\n/* harmony export */   mostrarGaleria: () => (/* binding */ mostrarGaleria)\n/* harmony export */ });\n// modules/galeria.js\r\n\r\nconst imagenes = [];\r\n\r\n// Función para cargar una imagen en la galería\r\nfunction cargarImagen(url) {\r\n  imagenes.push(url);\r\n}\r\n\r\n// Función para mostrar las imágenes en la página\r\nfunction mostrarGaleria() {\r\n  const galeriaElement = document.getElementById('galeria');\r\n\r\n  // Limpiamos el contenido de la galería\r\n  galeriaElement.innerHTML = '';\r\n\r\n  // Agregamos las imágenes a la galería\r\n  imagenes.forEach((url) => {\r\n    const imagenElement = document.createElement('img');\r\n    imagenElement.src = url;\r\n    galeriaElement.appendChild(imagenElement);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://parcial2dw/./src/modules/galeria.js?");

/***/ }),

/***/ "./src/modules/listTareas.js":
/*!***********************************!*\
  !*** ./src/modules/listTareas.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* binding */ agregarTarea),\n/* harmony export */   marcarTareaComoCompletada: () => (/* binding */ marcarTareaComoCompletada),\n/* harmony export */   obtenerListaDeTareas: () => (/* binding */ obtenerListaDeTareas)\n/* harmony export */ });\n// modules/listTareas.js\r\n\r\n// Lista de tareas inicialmente vacía\r\nlet tareas = [];\r\n\r\n// Función para agregar una tarea a la lista\r\nfunction agregarTarea(tarea) {\r\n  tareas.push({ tarea, completada: false });\r\n}\r\n\r\n// Función para marcar una tarea como completada\r\nfunction marcarTareaComoCompletada(index) {\r\n  if (index >= 0 && index < tareas.length) {\r\n    tareas[index].completada = true;\r\n  }\r\n}\r\n\r\n// Función para obtener la lista de tareas\r\nfunction obtenerListaDeTareas() {\r\n  return tareas;\r\n}\r\n\n\n//# sourceURL=webpack://parcial2dw/./src/modules/listTareas.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/agregator.js");
/******/ 	
/******/ })()
;
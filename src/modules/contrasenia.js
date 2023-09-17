// modules/contrasenia.js

// Función para generar una contraseña aleatoria
export function generarContrasenia(longitud, usarLetras, usarNumeros, usarSimbolos) {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
  
    let caracteresPermitidos = '';
  
    if (usarLetras) {
      caracteresPermitidos += letras;
    }
  
    if (usarNumeros) {
      caracteresPermitidos += numeros;
    }
  
    if (usarSimbolos) {
      caracteresPermitidos += simbolos;
    }
  
    let contrasenia = '';
  
    for (let i = 0; i < longitud; i++) {
      const randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
      contrasenia += caracteresPermitidos.charAt(randomIndex);
    }
  
    return contrasenia;
  }
  
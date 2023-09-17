// webpack.config.js 
const path = require('path'); 
 
module.exports = { 
    mode: 'development', // Modo de desarrollonp
  entry: './src/modules/agregator.js', // El punto de entrada de tu aplicación 
  output: { 
    filename: 'agregator.js', // El nombre del archivo de salida 
    path: path.resolve(__dirname, 'dist'), // La carpeta de salida 
  } 
  };
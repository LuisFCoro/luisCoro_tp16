
const fs = require('fs');

function obtenerBicicletas() {

  const data = fs.readFileSync('bicicletas.json', 'utf-8');
  
  const bicicletas = JSON.parse(data);

  return bicicletas;
}

module.exports = obtenerBicicletas;


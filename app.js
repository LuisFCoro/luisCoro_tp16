
const obtenerBicicletas = require('./datosBici');

const dhBici = {
  bicicletas: obtenerBicicletas(),

  buscarBici(id) {
    const biciEncontrada = this.bicicletas.filter(bici => bici.id === id);
    const resultado = biciEncontrada.length > 0 ? biciEncontrada[0] : null;
    return resultado;
  },

  venderBici(id) {
    const bici = this.buscarBici(id);
    let resultado;
    if (bici) {
      bici.vendida = true;
      resultado = bici;
    } else {
      resultado = "Bicicleta no encontrada";
    }
    return resultado;
  },

  biciParaLaVenta() {
    const disponibles = this.bicicletas.filter(bici => !bici.vendida);
    return disponibles;
  },


  totalDeVentas() {
    const total = this.bicicletas
      .filter(bici => bici.vendida)
      .reduce((suma, bici) => suma + bici.precio, 0);
    return total;
  }
};

// Buscar una bicicleta por ID
console.log(dhBici.buscarBici(1));  // Ejemplo: Buscar bicicleta con id 1

// Vender una bicicleta
console.log(dhBici.venderBici(1));  // Ejemplo: Vender bicicleta con id 1

// Ver bicicletas para la venta
console.log(dhBici.biciParaLaVenta());  // Ejemplo: Ver todas las bicicletas no vendidas

// Ver total de ventas realizadas
console.log(dhBici.totalDeVentas());  // Ejemplo: Ver total de ventas

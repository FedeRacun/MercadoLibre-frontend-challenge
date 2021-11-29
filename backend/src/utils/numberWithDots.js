/**
 * Desde la API de MeLi solo me llega el numero entero, por lo que uso una regex
 * para añadir los puntos
 */
const numberWithDots = numb => numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

module.exports = numberWithDots;

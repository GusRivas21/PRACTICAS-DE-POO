import juegos from './juegos.js';
import Venta from './venta.js';

const juego = new juegos("Horizon Zero Dawn","Guerrilla",2017);
console.log(juego.ConseguirNombre());

const cuota1 = new Date("horizon",10,10);
const cuota2 = new Date("horizon",10);
const venta = new Venta(juego, cuota1, cuota2);
console.log(venta.VenderJuego().ConseguirNombre());
console.log(venta.VenderJuego().ConseguirEmpresa());



/*import Libro from './libro.js';
import Prestamo from './prestamo.js';

const libro = new Libro('Harry Potter y el cáliz de fuego', 'J. K. Rowling', 640);
console.log(libro.obtenerTitulo()); 

const fechaInicio = new Date(2024, 3, 1); 
const fechaFin = new Date(2024, 3, 15); 
const prestamo = new Prestamo(libro, fechaInicio, fechaFin);
console.log(prestamo.obtenerLibro().obtenerTitulo());
*/

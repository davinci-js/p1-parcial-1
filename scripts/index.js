'use strict';

/*
 * MENDEZ MAXIMO
 */

let biblioteca = new Biblioteca();

function cargarDisco() {
  biblioteca.registrarDisco();
}

function mostrarBiblioteca() {
  biblioteca.show("#discos");
}

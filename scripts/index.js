"use strict";

/*
 * SORGETTI TOMÁS - PARCIAL 1
 */

const discos = [];

/**
 * Llamada desde un boton. Pide los datos para un disco.
 */
function cargar() {
  const disco = new Disco();

  // pedirle los datos al usuario
  disco.id = pedirDato("Ingresá el id del disco", true);
  disco.nombre = pedirDato("Ingresá el nombre del disco", false);
  disco.artista = pedirDato("Ingresá el artista del disco", false);
  disco.portada = pedirDato("Ingresá la imágen de portada del disco", false);

  disco.pistas = pedirPistas();

  discos.push(disco);
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
  // TODO
}




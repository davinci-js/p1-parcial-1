"use strict";

/*
 * SORGETTI TOMÁS - PARCIAL 1
 */

// DiscoDto
// id: number;
// nombre: string;
// artista: string;
// portada: string;
// pistas: PistaDto[]

// PistaDto
// id: number;
// nombre: string;
// duracion: number;

/**
 * Llamada desde un boton. Pide los datos para un disco.
 */
function cargar() {
  const disco = new DiscoDto();

  // pedirle los datos al usuario
  //TODO => si el id ya existe debería de pedirlo denuevo
  disco.id = pedirDato("Ingresá el id del disco", "number");
  disco.nombre = pedirDato("Ingresá el nombre del disco", "string");
  disco.artista = pedirDato("Ingresá el artista del disco", "string");
  disco.portada = pedirDato("Ingresá la imágen de portada del disco", "string");
  //TODO => para pedir las pistas debe ser un bucle

  console.log("DISCO", disco);
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
  // TODO
}

/**
 * Recive un dato y lo valida, si no es correcto, repite el proceso.
 * @param {string} msg
 * @param {string} tipoDeDato
 * @returns {string | number}
 */
function pedirDato(msg, tipoDeDato) {
  const dato = prompt(msg);
  let error;

  //* Divide si es un string o un number
  if (tipoDeDato === "number") {
    error = validateNumber(dato);
  } else if (tipoDeDato === "string") {
    error = validateString(dato);
  }

  //* Si hay un error, repite el proceso
  if (error) {
    alert(error);
    pedirDato(msg, tipoDeDato);
  }

  return dato;
}

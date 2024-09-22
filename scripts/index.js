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

  const pistas = [];
  function pedirPistas() {
    // pido los datos
    const nombre = pedirDato("Ingresá el nombre de la pista", false);
    const duracion = pedirDato("Ingresá la duración de la pista", true);

    // agrego un objeto a la lista de pistas
    pistas.push({ nombre, duracion });

    // preguntar si se quiere cargar otra pista
    if (confirm("¿Desea cargar otra pista?")) {
      pedirPistas();
    }

    // agrego las pistas al disco
    disco.pistas = pistas;
  }
  pedirPistas();

  discos.push(disco);
}

/**
 * Llamada desde un boton. Muestra todos los discos disponibles.
 */
function mostrar() {
  // TODO
}

function pedirDato(msg, isNumber) {
  // se pide un dato
  const dato = prompt(msg);
  let datoValidado;

  // se valida el dato, si es correcto, se guarda en datoValido
  try {
    if (isNumber) {
      datoValidado = validateNumber(dato);
      // const number = validateNumber(dato);
      // busca si el id ya existe en la lista, si existe, se lanza un error
      // const idExists = discos.some((disco) => disco.id === number);
      // if (idExists) {
      //   throw new Error("El id de ese disco ya existe");
      // } else {
      //   datoValidado = number;
      // }
    } else {
      datoValidado = validateString(dato);
    }
  } catch (error) {
    // si es incorrecto se lanza el error y se repite el proceso
    alert(error.message);
    return pedirDato(msg, isNumber);
  }

  return datoValidado;
}

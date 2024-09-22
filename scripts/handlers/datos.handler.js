/**
 *
 * @param {string} msg
 * @param {boolean} isNumber
 * @returns {number | string}
 */
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

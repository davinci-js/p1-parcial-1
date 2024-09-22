/**
 * Valida si el dato es un numero válido
 * @param {*} number
 * @returns {number | Error}
 */
function validateNumber(number) {
  // se parsea el string del prompt a un numero
  const parsedNumber = parseInt(number);

  // si number es null o undefined, lanza un error
  if (number === null || number === undefined) {
    throw new Error("Debe de enviar un número");
  }
  // si el número parseado no es un número válido, lanza un error
  else if (isNaN(parsedNumber)) {
    throw new Error("Debe ser un número");
  }
  // si el numero es 0 o negativo, lanza un error
  else if (parsedNumber <= 0) {
    throw new Error("No puede ser menor a 1");
  }

  // retorna el numero si es correcto
  return parsedNumber;
}

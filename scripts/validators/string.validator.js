
function validateString(text) {
  // si el texto es null o undefined, lanza un error
  if (text === null || text === undefined) {
    throw new Error("Envie el texto");
  }
  // si el texto es vacío o tiene unicamente espacios, lanza un error
  else if (text.trim() === "") {
    throw new Error("El texto no puede estar vacío");
  }
  // si el texto es un número, lanza un error
  const isNumber = parseInt(text);
  if (!isNaN(isNumber)) {
    throw new Error("Debe ser un texto");
  }

  // retorna el texto sin espacios
  return text.trim();
}

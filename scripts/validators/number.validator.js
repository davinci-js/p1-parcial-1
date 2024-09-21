function validateNumber(number) {
  parseInt(number);
  if (isNaN(number)) {
    return "Debe ser un número";
  } else if (number === null || number === undefined) {
    return "Debe de enviar un número";
  }
  return null;
}

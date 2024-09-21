function validateString(text) {
  console.log("TEXT", text);
  if (text === null || text === undefined) {
    return "Envie el texto";
  } else if (text.trim() === "") {
    return "El texto no puede estar vacío";
  } else if (!isNaN(text)) {
    return "Debe ser un texto";
  }
  return null;
}

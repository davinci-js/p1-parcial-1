/**
 * Manda a pedir los datos y agrega un objeto a la lista de pistas
 * @returns {Array<{nombre: string, duracion: number}>}
 */
function pedirPistas() {
  const pistas = [];
  // pido los datos
  const nombre = pedirDato("Ingresá el nombre de la pista", false);
  const duracion = pedirDato("Ingresá la duración de la pista", true);

  // agrego un objeto a la lista de pistas
  pistas.push({ nombre, duracion });

  // preguntar si se quiere cargar otra pista
  if (confirm("¿Desea cargar otra pista?")) {
    pedirPistas();
  }
  return pistas;
}

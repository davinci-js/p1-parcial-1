import { Disco } from "../entities/disco.entity.js";
import { Validator } from "../validators/disco.validator.js";

export class DiscoController {
  constructor() {
    this.discos = [];
  }

  pedirDato(msg, isNumber) {
    // se pide un dato
    const dato = prompt(msg);
    let datoValidado;

    // se valida el dato, si es correcto, se guarda en datoValido
    try {
      if (isNumber) {
        datoValidado = Validator.validateNumber(dato);
      } else {
        datoValidado = Validator.validateString(dato);
      }
    } catch (error) {
      // si es incorrecto se muestra el error y se repite el proceso
      alert(error.message);
      return this.pedirDato(msg, isNumber);
    }

    return datoValidado;
  }

  pedirPistas() {
    const pistas = [];
    // pido los datos
    // TODO => agregar id y validar si el id ya existe
    const nombre = this.pedirDato("Ingresá el nombre de la pista", false);
    const duracion = this.pedirDato("Ingresá la duración de la pista", true);

    // agrego un objeto a la lista de pistas
    pistas.push({ nombre, duracion });

    // preguntar si se quiere cargar otra pista
    if (confirm("¿Desea cargar otra pista?")) {
      return this.pedirPistas();
    }
    return pistas;
  }

  cargar() {
    const disco = new Disco();
    let id = null;

    do {
      if (id !== null) {
        alert("El id ya existe");
      }
      id = this.pedirDato("Ingresá el id del disco", true);
    } while (this.discos.find((disco) => disco.id === id));

    disco.id = id;
    disco.nombre = this.pedirDato("Ingresá el nombre del disco", false);
    disco.artista = this.pedirDato("Ingresá el artista del disco", false);
    disco.portada = this.pedirDato(
      "Ingresá la imágen de portada del disco",
      false
    );
    disco.pistas = this.pedirPistas();
    this.discos.push(disco);

    if (confirm("¿Desea cargar otro disco?")) {
      this.cargar();
    }
  }

  mostrar() {
    for (const disco of this.discos) {
      console.log(disco);
    }
  }
}

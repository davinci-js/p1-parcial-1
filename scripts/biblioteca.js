class Biblioteca {
  constructor() {
    this.discos = [];
  }

  idExiste(id) {
    return this.discos.some((disco) => disco.id === id);
  }

  registrarDisco() {
    let nombre;
    do {
      nombre = prompt("Ingrese el nombre del disco");
      if (nombre === null || nombre.trim() === "") {
        alert("Este campo debe ser completado, no debe estar vacio");
      }
    } while (nombre === null || nombre.trim() === "");

    let artista;
    do {
      artista = prompt("Ingrese el nombre del artista");
      if (artista === null || artista.trim() === "") {
        alert("Este campo debe ser completado, no debe estar vacio");
      }
    } while (artista === null || artista.trim() === "");

    let id;
    let idInvalido;
    do {
      idInvalido = false;
      let idInput = prompt("Ingrese ID del disco");
      if (idInput === null || idInput.trim() === "") {
        idInvalido = true;
        alert("Este campo debe ser completado, no debe estar vacio");
        continue;
      }

      id = parseInt(idInput);
      if (isNaN(id)) {
        idInvalido = true;
        alert("Debe ingresar un valor numérico");
      } else if (id < 1 || id > 999) {
        idInvalido = true;
        alert("Debe ingresar un ID entre 1 y 999");
      } else if (this.idExiste(id)) {
        idInvalido = true;
        alert(
          "El ID ingresado ya ha sido utilizado. Por favor, ingrese otro ID."
        );
      }
    } while (idInvalido);

    let img;
    do {
      img = prompt("Ingrese el enlace de la portada del disco");
      if (img === null || img.trim() === "") {
        alert("Este campo debe ser completado, no debe estar vacio.");
      }
    } while (img === null || img.trim() === "");

    let disco = new Disco(nombre, artista, id, img);
    this.registrarTracklist(disco);
    this.discos.push(disco);
  }

  registrarTracklist(disco) {
    while (true) {
      let nombre = "";
      while (!nombre) {
        nombre = prompt("Ingrese el nombre de la pista");
        if (!nombre) {
          alert("Este campo debe ser completado, no debe estar vacio.");
        }
      }

      let duracion = "";
      while (!duracion || isNaN(duracion) || duracion <= 0 || duracion > 7200) {
        duracion = prompt("Ingrese la duración de la pista en segundos");
        if (!duracion || isNaN(duracion) || duracion <= 0 || duracion > 7200) {
          alert(
            "La duración de la pista debe ser un número mayor a 0, y no puede durar más de 7200 segundos."
          );
        }
      }

      duracion = parseInt(duracion);
      let pista = new Pista(nombre, duracion, duracion >= 180);
      disco.pushPista(pista);

      if (!confirm("¿Desea cargar otra pista?")) break;
    }
  }

  show(etiqueta) {
    const contenedor = document.querySelector(etiqueta);
    contenedor.innerHTML = "";
    for (let disco of this.discos) {
      disco.show(etiqueta);
    }
  }
}

class Disco {
  constructor(nombre, artista, id, img) {
    this.nombre = nombre;
    this.artista = artista;
    this.id = id;
    this.img = img;
    this.tracklist = [];
  }

  toString() {
    return `
    <div class="contenedor">
    <div>
      <figure>
        <img class="portada" src="${this.img}" alt="Portada del disco">
      </figure>
    </div>
    <div>
      <h4>Disco: ${this.nombre}</h4>
      <h5>Artista: ${this.artista}</h5>
      <h6>ID: ${this.id}</h6>
      <h6 class="tracklist">Tracklist</h6>
      <ol>
        ${this.tracklist.map((pista) => `<li>${pista.toString()}</li>`).join("")}
      </ol>
    </div>
  </div>
  
      `;
  }

  show(etiqueta) {
    document.querySelector(etiqueta).innerHTML += this.toString();
  }

  pushPista(pista) {
    this.tracklist.push(pista);
  }
}

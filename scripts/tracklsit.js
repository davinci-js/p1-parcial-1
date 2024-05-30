class Pista {
  constructor(nombre, duracion, destacar = false) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.destacar = destacar;
  }

  formatearDuracion() {
    const minutos = Math.floor(this.duracion / 60);
    const segundos = this.duracion % 60;
    const segundosFormateados = segundos < 10 ? `0${segundos}` : segundos;
    return `${minutos}:${segundosFormateados}`;
  }

  toString() {
    const duracionFormateada = this.formatearDuracion();
    const estiloDuracion = this.destacar ? 'style="color: green;"' : "";
    return `
        <div>
          <p class="nombre">Nombre: ${this.nombre}</p>
          <p class="duracion" ${estiloDuracion}>Duración: ${duracionFormateada}</p>
        </div>
      `;
  }

  show(etiqueta) {
    document.querySelector(etiqueta).innerHTML += this.toString();
  }
}

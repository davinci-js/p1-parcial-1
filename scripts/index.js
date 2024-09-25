import { DiscoController } from "./controllers/disco.controller.js";

const discoController = new DiscoController();

function cargar() {
  discoController.cargar();
}

function mostrar() {
  discoController.mostrar();
}

const cargarButton = document.querySelector("#cargar");
const mostrarButton = document.querySelector("#mostrar");

cargarButton.addEventListener("click", cargar);
mostrarButton.addEventListener("click", mostrar);

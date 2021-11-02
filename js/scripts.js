import hamburgerMenu from "./menu_hamburguesa.js";
import slider from "./carrusel.js";

const d = document;
slider();
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel");
  slider();
});

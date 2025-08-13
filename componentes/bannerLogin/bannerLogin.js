import { login } from "../pagges/login/login.js";
import { vistaNueva } from "./vistaNueva.js";

export function banner2() {
    // Contenedor principal
    let div = document.createElement('div');
    div.className = "div-banner2";

    // Contenedor interno para aplicar grid
    let contenido = document.createElement('div');
    contenido.className = "contenido";

    // Título
    let h2 = document.createElement('h2');
    h2.textContent = "Geeta.";
    h2.className = "h2";
    contenido.appendChild(h2);

    // Primer párrafo (bold)
    let parrafo1 = document.createElement('p');
    parrafo1.textContent = "Create your fashion in your own way";
    parrafo1.className = "p2";
    contenido.appendChild(parrafo1);

    // Segundo párrafo
    let parrafo2 = document.createElement('p');
    parrafo2.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    parrafo2.className = "p1";
    contenido.appendChild(parrafo2);

    // Botón 1 sin href, con event listener
    let boton1 = document.createElement('div');
    boton1.textContent = "Log IN";
    boton1.className = "boton1";
    boton1.addEventListener('click',()=>{
      div.classList.add("ocultar")
      document.body.appendChild(vistaNueva());
    });
    contenido.appendChild(boton1); 

    // Texto OR corregido a span
    let textoOr = document.createElement('span');
    textoOr.textContent = "-- OR --";
    textoOr.className = "or";
    contenido.appendChild(textoOr);

    // Botón 2
    let boton2 = document.createElement('a');
    boton2.textContent = "Register";
    boton2.href = "#register"; // Aquí puedes poner la ruta o lógica que quieras
    boton2.className = "boton2";
    contenido.appendChild(boton2);

    div.appendChild(contenido);

    return div;
}

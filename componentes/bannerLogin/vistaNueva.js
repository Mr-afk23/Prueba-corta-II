export function vistaNueva() {
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    let bloque = document.createElement('div');
    bloque.className = "bloque";
    contenedor.appendChild(bloque);

    let arrow = document.createElement('img');
    arrow.className = "arrow";
    arrow.src = "../../assets/Boton-De-Regreso-Blnaco.svg";
    contenedor.appendChild(arrow);
    return contenedor;
}

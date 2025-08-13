import { banner2 } from "../../bannerLogin/bannerLogin.js";
import { vistaNueva } from "../../bannerLogin/vistaNueva.js";

export function login(){
    let login = document.createElement('div');
    login.className = "login";

    login.appendChild(banner2());
    login.appendChild(vistaNueva());


    let span = document.createElement('span')
    span.textContent = "Geeta."
    login.appendChild(span);


    return login;
}

document.body.appendChild(login());
import { banner2 } from "../../bannerLogin/bannerLogin.js";

export function login(){
    let login = document.createElement('div');
    login.className = "login";

    login.appendChild(banner2());


    let span = document.createElement('span')
    span.textContent = "Geeta."
    login.appendChild(span);





















    return login;
}

document.body.appendChild(login());
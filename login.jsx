import {
    txtLogin,
    txtSenha
} from '../App'

var login = "teste";
var senha = "teste";

export const fazerLogin = (e) => {
    if (txtLogin.value === login && txtSenha.value === senha) {
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha inválidos");
    }
}


document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        var btn = document.querySelector("#buttonLogin");
        btn.click()
    }
})


/* export const vazio = (e) => {
    if (txtLogin.value === "" && txtSenha === "") {
        alert ("Os campos 'Login' e 'Senha' não podem ser vazios.")
    }
} */
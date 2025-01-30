console.log("Iniciando script...");

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Documento carregado");

    document.getElementById("profile-button").onclick = function () {
        console.log("Botão de perfil clicado");
        window.location.href = "https://www.instagram.com/vn_dunorte?igsh=OWU0a3dnNTJjMmo1&utm_source=qr";
    };
});

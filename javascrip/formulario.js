const nome = document.getElementById("nome");
const email = document.getElementById("email");
const texto = document.getElementById("texto");
const form = document.getElementById("card");
const mensage = document.getElementById("mensage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let mostrar = "";
  let entrar = false;
  let correo = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{3})+$/;
  if (nome.value.length < 3) {
    mostrar += `Nome inválido <br>`;
    entrar = true;
  }
  if (!correo.test(email.value)) {
    mostrar += `E-mail não válido <br>`;
    entrar = true;
  }
  if (texto.value.length < 10) {
    mostrar += `texto inválido <br>`;
    entrar = true;
  }
  if (entrar) {
    mensage.innerHTML = mostrar;
  }
});
EventCounts.addEventListener("click", enviarFormulario);

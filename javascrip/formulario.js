const nome = document.getElementById("nome");
const email = document.getElementById("email");
const texto = document.getElementById("texto");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(nome.value, email.value, texto.value);
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{3})+$/;
  if (nome.value.length < 3) {
    warnings += `Nome nao e valido <br>`;
    entrar = true;
  }
  if (regexEmail.test(email.valeu)) {
    warnings += `Email invalido  <br>`;
    entrar = true;
  }

  if (texto.value.length < 10) {
    warnings += `texto inválido <br>`;
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "ENVIADO";
  }
});

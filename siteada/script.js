const botao = document.getElementById("enviar");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

enviar.addEventListener("click", () => {
	if (nome.value != "" && email.value != ""){
		alert("Cadastro enviado!");
	} else {
		alert("Preencha todos os campos do formulário!");
	}
});
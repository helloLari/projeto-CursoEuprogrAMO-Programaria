document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&    document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por email!")
  }else{
    alert("Por favor, preencha os campos nome e email.")
  }
}

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
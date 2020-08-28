document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("tel").value != "" ){
  alert("Prontinho! Voce receberá as novidades por e-mail.")
}else{
  alert("Por favor, preencha os campos nome, telefone e email")
}
}


const btnLogar = document.querySelector("#btnLogar")
const inputEmail = document.querySelector("#inputEmail")
const inputSenha = document.querySelector("#inputSenha")
const btnRevelar = document.querySelector("#btnRevelar")

btnLogar.addEventListener("click",() => {
  if(inputEmail.value <= 8 || inputSenha.value <= 8){
    alert("Preencha os espaços acima!")
  }else {
  localStorage.setItem("email",inputEmail.value)
  localStorage.setItem("password",inputSenha.value)
  setTimeout(() => {
    window.location = "../index.html"
  },2000)
  }
})

btnRevelar.addEventListener("click",() => {
  if(inputSenha.getAttribute("type") == "password"){
    inputSenha.setAttribute("type","text")
    btnRevelar.innerHTML="🙉"
  }else {
    inputSenha.setAttribute("type","password")
    btnRevelar.innerHTML="🙈"
  }
  
})

const telaLogin = document.querySelector("#login")
const emailInfo =document.querySelector("#emailInfo")
const main = document.querySelector("main")
const mainValor = document.querySelector("#subValor")

window.addEventListener("load",() => {
  emailInfo.innerHTML = localStorage.getItem("email")
  if(emailInfo.innerHTML.length > 8){
    emailInfo.style.fontSize ="14px"
    emailInfo.style.borderBottom = "1px solid black"
    telaLogin.innerHTML = "Logado"
    telaLogin.removeEventListener("click",siteLogin)}
   initClickSystem()
})

const siteLogin = () => {
   window.location = "Sites/TelaLogin.html"
}

telaLogin.addEventListener("click",siteLogin)

// Função para obter a quantidade de cliques do armazenamento local
function getClickCount() {
  // Verifica se já existe uma contagem de cliques no armazenamento local
  if (localStorage.getItem('clickCount')) {
    // Se existir, converte o valor para número e retorna
    return parseInt(localStorage.getItem('clickCount'));
  } else {
    // Caso contrário, retorna 0
    return 0;
  }
}

// Função para atualizar a quantidade de cliques no armazenamento local
function updateClickCount(count) {
  // Salva a nova quantidade de cliques no armazenamento local
  localStorage.setItem('clickCount', count.toString());
}

// Função para lidar com o clique no botão
function handleClick() {
  // Obtém a quantidade atual de cliques
  let count = getClickCount();
  
  // Incrementa a contagem de cliques
  count++;
  
  // Atualiza a quantidade de cliques no armazenamento local
  updateClickCount(count);
  
  // Exibe a quantidade de cliques na página
  mainValor.innerHTML = count.toString();
}

// Função para inicializar o sistema de clique
function initClickSystem() {
  
  // Obtém a quantidade de cliques atual e exibe na página
  const count = getClickCount();
  mainValor.innerHTML = count.toString();
  
}

main.addEventListener("click",() => {
  handleClick()
})

const logout = document.querySelector("#logout")
const caixaPop = document.querySelector("#caixaPop")

const div = document.createElement("div")
const divX = document.createElement("div")
const divBtn = document.createElement("div")
const h1 = document.createElement("h1")
const btn_yes = document.createElement("button")
const btn_no = document.createElement("button")
const btn_x = document.createElement("button")

logout.addEventListener("click",() => {
  main.style.filter = "blur(2px)"
  btn_x.innerHTML = "X"
  h1.innerHTML="Você quer deslogar da sua conta atual?"
  btn_yes.innerHTML ="Sim"
  btn_no.innerHTML ="Não"
  
  div.classList.add("caixaMsg")
  divX.classList.add("caixaX")
  divBtn.classList.add("caixaBtn")
  
  divX.appendChild(btn_x)
  div.appendChild(divX)
  div.appendChild(h1)
  divBtn.appendChild(btn_yes)
  divBtn.appendChild(btn_no)
  div.appendChild(divBtn)
  caixaPop.appendChild(div)
})

btn_x.addEventListener("click",() => {
  caixaPop.removeChild(div)
  main.style.filter = "blur(0px)"
})

btn_no.addEventListener("click",() => {
  caixaPop.removeChild(div)
  main.style.filter = "blur(0px)"
})

btn_yes.addEventListener("click",() => {
  localStorage.setItem("email","")
  localStorage.setItem("password","")
  caixaPop.removeChild(div)
  main.style.filter = "blur(0px)"
  emailInfo.innerHTML = ""
})

//Tela copy

const btn_copy = document.querySelector("#btn_copy")

btn_copy.addEventListener("click",() => {
  const config={
    cor:"#48f"
  }
  Cxmssg.config(config)
  Cxmssg.mostrar("Copyright ©","Esse site foi feito especialmente e unicamente pelo Abbis!")
})

// tela segurança

const info = document.querySelector("#info")

info.addEventListener("click",()=>{
  const config2={
    cor:"#505"
  }
  Cxmssg.config(config2)
  Cxmssg.mostrar("Informações sobre a criação do site","Esse site foi desenvolvido usando medias queries e localStorage!!")

})

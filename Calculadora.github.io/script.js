const Li = document.querySelectorAll("li")

const inputT = document.querySelector("#tela")

const Principal = document.querySelector(".principal")

const Submain = document.querySelector(".calculadora")

//btns

const btn_clear = document.querySelector("#clear")

const btn_X = document.querySelector("#bX")

const btn_Di = document.querySelector("#bDi")

const btn_Ma = document.querySelector("#bMa")

const btn_Me = document.querySelector("#bMe")

const btn_Somar = document.querySelector(".igu")

const btn_On = document.querySelector("#bOn")

const btn_Pd = document.querySelector("#pD")

const btn_Pe = document.querySelector("#pE")

const gaveta = document.querySelector("#gaveta")

Li.forEach((el) => {

  el.addEventListener("click",() => {

    inputT.innerHTML += Number(el.innerHTML)

    

  })

})

btn_clear.addEventListener("click",() => {

  inputT.innerHTML = null

})

btn_X.addEventListener("click",() => {

  inputT.innerHTML += "*"

})

btn_Ma.addEventListener("click",() => {

  inputT.innerHTML += "+"

})

btn_Me.addEventListener("click",() => {

  inputT.innerHTML += "-"

})

btn_Di.addEventListener("click",() => {

  inputT.innerHTML += "/"

})

btn_Pd.addEventListener("click",() => {

  inputT.innerHTML += ")"

})

btn_Pe.addEventListener("click",() => {

  inputT.innerHTML += "("

})

btn_Somar.addEventListener("click", () => {

  inputT.innerHTML = eval(inputT.innerHTML)

  

})

btn_On.addEventListener("click",(evt) => {  

   navigator.clipboard.writeText(inputT.innerHTML)

})

gaveta.addEventListener("click",(evt) => {      

      Principal.classList.toggle("Sh")

      if(Principal.classList.contains("Sh")){

          gaveta.innerHTML = "<"

      }else {

          gaveta.innerHTML = ">"

      }

})

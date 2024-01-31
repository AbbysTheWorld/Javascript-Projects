//btn
const regar = document.querySelector("#btn_regar")
const secBtns = document.querySelector(".btns")
const matar = document.querySelector("#btn_matar")
const carinho = document.querySelector("#btn_carinho")
// ---

const msg = document.querySelector("#msg")
const msg2 = document.querySelector("#msg2")
const msg3 = document.querySelector("#msg3")
const msgMorte = document.querySelector("#morte")

let nivel = document.querySelector("#nivel")
let i = 0
let img = document.querySelector("#principal")
nivel.innerHTML = i

/* Funçoes: */

//function 1 (7)

function  nivel7() {
   setTimeout(() => {
       msg2.innerHTML = ""
       msg3.innerHTML = ""
       msg.innerHTML = "PLANTA EVOLUIU"
    img.setAttribute("src", "imagens/bebe crescendo.jpg")  
   },3000)
             
   setTimeout(() => {
       msg.innerHTML = ""
   },6000)         
}

// function 2 (14)
 
function  nivel14() {
   setTimeout(() => {
       msg2.innerHTML = ""
       msg3.innerHTML = ""
       msg.innerHTML = "PLANTA EVOLUIU"
    img.setAttribute("src", "imagens/adolescente.jpg")  
   },3000)
             
   setTimeout(() => {
       msg.innerHTML = ""
   },6000)         
}

// function 3 (17)

function  nivel17() {
   setTimeout(() => {
       msg2.innerHTML = ""
       msg3.innerHTML = ""
       msg.innerHTML = "PLANTA EVOLUIU"
    img.setAttribute("src", "imagens/adolescente crescendo.jpg")  
   },3000)
             
   setTimeout(() => {
       msg.innerHTML = ""
   },6000)         
}

// function 4 (21)

function  nivel21() {
   setTimeout(() => {
       msg2.innerHTML = ""
       msg3.innerHTML = ""
       msg.innerHTML = "PLANTA EVOLUIU"
    img.setAttribute("src", "imagens/adulto.jpg")  
   },3000)
             
   setTimeout(() => {
       msg.innerHTML = ""
   },6000)         
}

// function  5 (25)

function  nivel25() {
   setTimeout(() => {
       msg2.innerHTML = ""
       msg3.innerHTML = ""
       msg.innerHTML = "PLANTA EVOLUIU"
    img.setAttribute("src", "imagens/idoso.jpeg")  
   },3000)
             
   setTimeout(() => {
       msg.innerHTML = ""
   },6000)         
}

// function  6 (40)

function  nivel40() {
   setTimeout(() => {
       msg2.innerHTML = ""
       msg3.innerHTML = ""
       msgMorte.style.color = "red"
       msgMorte.innerHTML = "Planta morreu.."
    img.setAttribute("src", "imagens/rip.jpeg")  
   },3000)
             
   setTimeout(() => {
       msgMorte.innerHTML = ""
   },9000)         
}

// --- 

regar.addEventListener("click", () => {
    function  Tudo() {
        setTimeout(() => {       
       i++
    nivel.innerHTML = i    
    msg3.style.textShadow = "5px 5px 10px yellow"
    msg3.style.color = "gold"
    msg3.innerHTML = "⭐Level Up⭐"
    moveButton()
   
    if (i == 7) {        
        msg2.innerHTML = "Planta está evoluindo<span class='oi'>...</span>"
        setTimeout(nivel7(),300)
    }else if(i == 14){
        msg2.innerHTML = "Planta está evoluindo<span class='oi'>...</span>"
        setTimeout(nivel14(),300)
    }else if(i == 17){
        msg2.innerHTML = "Planta está evoluindo<span class='oi'>...</span>"
        setTimeout(nivel17(),300)
    }else if (i == 21) {
        msg2.innerHTML = "Planta está evoluindo<span class='oi'>...</span>"
        setTimeout(nivel21(),300)
    }else if (i == 25) {
        msg2.innerHTML = "Planta está evoluindo<span class='oi'>...</span>"
        setTimeout(nivel25(),300)
    }else if(i == 40) {
        msg2.innerHTML = "Planta morreu..."
        setTimeout(nivel40(),300)
    }
   },500)
    }       
    Tudo()
})

// A parte acima foi para o botão regar!

// matar
    const revive = document.createElement("button")
    const txt = document.querySelector("#txt")
    const caixa = document.querySelector(".caixa")
    const btnX = document.querySelector(".btn_X")
    const btnEnv = document.querySelector(".btn_send")
    
    revive.setAttribute("id","reviver")
    revive.innerHTML = "Reviver"
        
matar.addEventListener("click", () => {

    caixa.style.display = "flex"
   btnEnv.addEventListener("click",() => {
       if (txt.value.toLowerCase() == "sim") {
        msgMorte.style.color = "red"
    msgMorte.innerHTML = "Planta morreu! clique em reviver-la!"
    img.setAttribute("src", "imagens/rip.jpeg")    
    regar.remove()
    carinho.remove()
    caixa.style.display = "none"
    secBtns.appendChild(revive)
    }else if(txt.value.toLowerCase() == "nao") {      
        caixa.style.display = "none"
       setTimeout(() => {
           alert("Parabens por nao matar-la 😁")
       },1000)
    }
  })                                     
})

btnX.addEventListener("click",() => {
       caixa.style.display = "none"       
    })

revive.addEventListener("click",() => {
    setTimeout(() => {
        window.location.reload(true)
    },2000)
})

/* funcao random */
function getRandomPosition() {
 var screenWidth = window.innerWidth; 
 var screenHeight = window.innerHeight; 
 var buttonWidth = msg3.offsetWidth;
 var buttonHeight = msg3.offsetHeight;
 var randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
 var randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));
    return { x: randomX, y: randomY };
   }   
   function moveButton() {   
    var randomPosition = getRandomPosition();
     msg3.style.left = randomPosition.x + 'px';
     msg3.style.top = randomPosition.y + 'px';
       }
    /* --- */   
    
    carinho.addEventListener("click", () => {
   
    msg3.style.color = "pink"
    msg3.style.textShadow = "5px 5px 10px purple"
    msg3.innerHTML = "Você deu carinho😆😆"    
    moveButton()
    i += 5
    nivel.innerHTML = i        
   setTimeout(() => {
       setTimeout(() => {
        msg3.innerHTML = ""
    },2000)
   },2000)
    
 })

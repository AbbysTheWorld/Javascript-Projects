//imagens
const imgCiclo = document.getElementById("ciclope")
const imgJean = document.getElementById("jeanGrey")
const imgKitty = document.getElementById("kitty")
const imgVampi = document.getElementById("vampira")
const imgWolve = document.getElementById("wolverine")
const imgNotur = document.getElementById("noturno")
const imgMagne = document.getElementById("magneto")
const imgTemp = document.getElementById("tempestade")
const divAudios = document.querySelector("#btnAudios")
const spanTim = document.querySelector("#lo")
const hidd = document.getElementById("hi")

let num = 0

const info = document.querySelector(".infos")
const imgInfo = document.querySelector("#imgInfo")
const h2Info = document.querySelector("#h2Info")
const pInfo = document.querySelector("#pInfo")

const imgInf = new Image()
const h2Inf = document.createElement("h2")
const hrInf = document.createElement("hr")
const pInf = document.createElement("p")

const audio = new Audio()
const btnAudio = document.createElement("button")
const btnAudioStop = document.createElement("button")     
const btnAudioPause = document.createElement("button")
  
const loop = () => {
    setInterval(() => {        
        num++
        if (num < 10) {
            num = "0" + num
        }        
        spanTim.innerHTML = num
        if (num >= 50) {
            num = 50
            spanTim.innerHTML = num
        }
    },1000)
}
     
btnAudio.innerHTML = "▶️"
btnAudioStop.innerHTML = "⏹"
divAudios.appendChild(btnAudio)
divAudios.appendChild(btnAudioStop)

btnAudio.addEventListener("click", () => {
        audio.src = "theme.mp3"        
        audio.play()
        num = 0
        hidd.style.display = "none"
        spanTim.style.display = "inline-block"
        loop()
    })  
btnAudioStop.addEventListener("click", () => {   
        window.location.reload()
        audio.pause()        
        hidd.style.display = "inline-block"
        spanTim.style.display = "none"
        
    })
    
imgCiclo.addEventListener("click", () => {
    imgInf.src = "imagensInfo/clicloInfo.png"    
    h2Inf.innerHTML = "CLICLOPE"
    pInf.innerHTML = "Tem poderes de raio laser, ao remover os oculos o ciclope consegue atirar uma rajada de raio laser com os olhos!"
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)          
})
imgJean.addEventListener("click", () => {
    imgInf.src = "imagensInfo/janeInfo.png"    
    h2Inf.innerHTML = "JEAN GREY"
    pInf.innerHTML = "Tem poderes de telepatia, telecinese e empatia de Jean são drasticamente aumentadas quando em contato com a Fênix, além de poder viajar no vácuo do espaço que vai além da velocidade da luz. Ela também ganha controle sobre o fogo cósmico, manipulação temporal e a habilidade de ressureição."
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)    
})
imgKitty.addEventListener("click", () => {
    imgInf.src = "imagensInfo/kittyInfo.png"    
    h2Inf.innerHTML = "KITTY PRYDE"
    pInf.innerHTML = "Poderes: uma mutante, Pryde possui uma habilidade faseada que lhe permite, assim como objetos ou pessoas com quem ela está em contato, tornar-se intangível. Esse poder também perturba qualquer campo elétrico que ela passa, e permite que ela possa andar no ar."
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)
})
imgVampi.addEventListener("click", () => {
    imgInf.src = "imagensInfo/vampInfo.png"    
    h2Inf.innerHTML = "VAMPIRA"
    pInf.innerHTML = "Seu poder mutante é a habilidade de absorver a vitalidade, memórias, habilidades e poderes de outros seres vivos através do contato com a pele"
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)
})
imgTemp.addEventListener("click", () => {
    imgInf.src = "imagensInfo/tempeInfo.png"    
    h2Inf.innerHTML = "TEMPESTADE"
    pInf.innerHTML = "Tem poderes de controlar as forças da natureza,faz o clima variar entre seus extremos!"
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)
})
imgMagne.addEventListener("click", () => {
    imgInf.src = "imagensInfo/magneInfo.png"    
    h2Inf.innerHTML = "MAGNETO"
    pInf.innerHTML = "Pode manipular o campo eletromagnético de um planeta inteiro e também já aproveitou o magnetismo para parar exércitos, levantar ilhas do fundo dos oceanos, mover montanhas, mudar o curso dos rios, e devastar o mundo com inundações e terremotos."
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)
})
imgWolve.addEventListener("click", () => {
    imgInf.src = "imagensInfo/wolveInfo.png"    
    h2Inf.innerHTML = "WOLVERINE"
    pInf.innerHTML = "Poderes e habilidades: Além de suas mortais garras de adamantium, capazes de cortar qualquer coisa, ele tem um poderoso fato de cura; envelhece lentamente – o que o torna praticamente imortal -; e tem diversas características animais, como sentidos muito aguçados."
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)
})
    
imgNotur.addEventListener("click", () => {
    imgInf.src = "imagensInfo/noturInfo.png"    
    h2Inf.innerHTML = "NOTURNO"
    pInf.innerHTML = "Seus poderes mutantes incluem teletransporte, super agilidade, aderência física, visão noturna, habilidades acrobáticas e a habilidade de fundir-se com as sombras."
    info.appendChild(imgInf)
    info.appendChild(h2Inf)
    info.appendChild(hrInf)
    info.appendChild(pInf)
})

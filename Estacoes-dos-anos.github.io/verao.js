
const data= new Date()
const dataMes = data.getMonth() + 1
const diaMes = data.getDate() 

const p_Principal = document.querySelector("p.Crt")
const h1Data = document.querySelector("h1")
const body = document.querySelector("body")
const main = document.querySelector("main")
    
     main.style.display = "none"    

function verificar() {
    main.style.display = "flex"
    //Verao
    if (dataMes >= 12 && diaMes >= 22 || dataMes <= 3 && diaMes < 20 ) {    
      h1Data.innerHTML += " Verao"
      body.style.backgroundImage = "url('imagens/verao.jpeg')"   
        p_Principal.innerHTML += " Verão e uma estação bem quente e ótimo para ir à Praia!🏝"
      //Outono
    }else if (dataMes >= 3 && diaMes >= 20 || dataMes <= 6 && diaMes <= 21) {
        h1Data.innerHTML += "Outono"
        body.style.backgroundImage = "url('imagens/outono.jpg')"        
      main.style.color = "orange"   
      p_Principal.innerHTML += " Outono e uma estação meio fria e ela é ótimo para ir Passear além de ser bem bonita🏀"  
      //Inverno
    } else if (dataMes >= 6 && diaMes >= 21|| dataMes < 9 && diaMes <= 23) {
        h1Data.innerHTML += "Inverno"
        body.style.backgroundImage = "url('imagens/inverno.jpg')"
      main.style.color = "lightblue"     
      p_Principal.innerHTML += "Inverno e uma estação bem fria e ela e otima para ficar em casa tomando café quente☕" 
       //Primavera
    }else if(dataMes >=  9 && diaMes >= 23|| dataMes < 12 && diaMes <= 22) {
        h1Data.innerHTML += " Primavera"
        body.style.backgroundImage = "url('imagens/primavera.jpg')"
      main.style.color = "#8d6a76"
    }
    h1Data.style.color = "white"
}

    // function slider | forEach = chegar em cada um
let slider = document.querySelectorAll(".slider")
let btnPrev = document.getElementById("btn_prev")
let btnNext = document.getElementById("btn_next")

let currentSlide = 0

function  hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function  showSlider() {
    slider[currentSlide].classList.add('on')
}

function  nextSlide() {
    hideSlider()
     if (currentSlide === slider.length -1) {
         currentSlide = 0
     }else {
         currentSlide++
     }   
     showSlider()         
}

function  prevSlide() {
    hideSlider()
     if (currentSlide === 0) {
         currentSlide = slider.length - 1
     }else {
         currentSlide--
     }  
     showSlider()          
}

btnNext.addEventListener('click', nextSlide)
btnPrev.addEventListener('click', prevSlide)
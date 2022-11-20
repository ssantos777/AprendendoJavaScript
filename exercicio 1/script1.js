var corpo = document.querySelector("body#corpo")
var txthoras = document.querySelector("p#txthoras")
var hora = new Date().getHours()
var minuto = new Date().getMinutes()
var imagem = document.querySelector("img#imagem")

if (hora < 6){
   corpo.style.background = "#010B1F"
   imagem.src = "madrugada.jpg"
   } else if (hora < 12){
      corpo.style.background = "#0750E5"
      imagem.src = "manha.jpg"
   } else if (hora < 18){
      corpo.style.background = "#E5901E"
      imagem.src = "tarde.jpg"
   } else{
      corpo.style.background = "#47006B"
      imagem.src = "noite.jpg"
}

txthoras.innerText = `Agora são ${hora} horas e ${minuto} minutos.`
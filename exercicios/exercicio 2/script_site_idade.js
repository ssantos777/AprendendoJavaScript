/* function fotos(sexo, idade, imagem){
    if(idade < 12){
        imagem.setAttribute("src", `foto-bebe-${sexoCod}.png`)
    } else if(idade < 24) {
        imagem.setAttribute("src", `foto-jovem-${sexoCod}.png`)
    } else if(idade < 48) {
        imagem.setAttribute("src", `foto-adulto-${sexoCod}.png`)
    } else {
        imagem.setAttribute("src", `foto-idoso-${sexoCod}.png`)
    }
} */

function verificar(){
var anoInput = Number(document.querySelector("input#ano").value)
var anoAtual = (new Date()).getFullYear()
var idade
var sexo = document.getElementsByName("sexo")
var imagem = document.createElement("img")
imagem.setAttribute("src", "imagem")
imagem.setAttribute("id", "imagem")
var res = document.querySelector("div#res")

if (sexo[0].checked) {
    sexo = "Homem"
    var sexoCod = "m"
} else {
    sexo = "Mulher"
    var sexoCod = "f"
}

if (anoInput == 0 || anoInput > anoAtual){
    window.alert("Ano Inválido. Reveja os dados e tente novamente.")
    return
} else {
    idade = anoAtual - anoInput 
}

if(idade < 12){
    imagem.setAttribute("src", `foto-bebe-${sexoCod}.png`)
} else if(idade < 24) {
    imagem.setAttribute("src", `foto-jovem-${sexoCod}.png`)
} else if(idade < 58) {
    imagem.setAttribute("src", `foto-adulto-${sexoCod}.png`)
} else {
    imagem.setAttribute("src", `foto-idoso-${sexoCod}.png`)
}

res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
res.appendChild(imagem)

}


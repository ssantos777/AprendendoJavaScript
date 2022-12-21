function contar(){
var inicio = document.querySelector("input#inicio").value
var fim = document.querySelector("input#fim").value
var passo = document.querySelector("input#passo").value
var str = String("Contando: ")
var contagem = document.querySelector("p#contagem")

if (inicio.length == 0  || fim.length == 0 || passo.length == 0){
    window.alert("Impossível contar.")
} else { 
inicio = Number(inicio)
fim = Number(fim)
passo = Number(passo)

if (passo <= 0){
    window.alert("Valor do passo inválido.")
} else{   
    if (inicio < fim){
        while (inicio <= fim) {
            str = str + inicio + " 👉 "
            inicio += passo
        }
        str = str + "🏁"
        contagem.innerHTML = str

    } else if (inicio > fim){
        while (inicio >= fim) {
            str = str + inicio + "👉"
            inicio -= passo
        }
         str = str + "🏁"
        contagem.innerHTML = str

    } else {
        window.alert("Valores inválidos de início e fim inválidos.")
    }
}
}
}
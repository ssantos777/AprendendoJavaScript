function contar(){
var inicio = Number(document.querySelector("input#inicio").value)
var fim =   Number(document.querySelector("input#fim").value)
var passo = Number(document.querySelector("input#passo").value)
var str = String("Contando: ")
var contagem = document.querySelector("p#contagem")

if (passo == 0){
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


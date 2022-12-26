// variaveis
var lista = document.querySelector("select#lista")
var saida = document.querySelector("div#output")

var buttonFin = document.querySelector("input#botao") 

var arrayNums = []
var arrayFin = []

var resetOpt = false
var resetDiv = false


function adicionar() {
    // reset do select e da div
    if (resetOpt == true && resetDiv == true){

    } else if (resetOpt == true){
        lista.innerHTML = " "
        resetDiv = true
    }

    // var que busca a entrada
    let num = (document.querySelector("input#entrada")).value

    // condições de entrada
    if (num.length == 0){ // num == ""
        window.alert("É necessário um número para adicionar.")
    } else {
        num = Number(num)

        if (num < 1 || num > 100) {
            window.alert("É necessário que seja um número entre 1 e 100.")
        } else if (arrayNums[num-1] == num){
            window.alert("É necessário que o número não seja repetido")
        } else { // adicionar uma option no select
            let opt = document.createElement("option")
            opt.value = `ListaNum${num}`
            opt.innerHTML = `O número ${num} foi adicionado.`
            lista.appendChild(opt)
        }
        // adicionar num no array
        arrayNums[num-1] = Number(num)
    }
}

function verificar() {
    // reset do select e da div
    resetOpt = true
    if (resetDiv == true){
        arrayFin = []
        resetDiv = false
    }

    // mudança do botao
    buttonFin.value = "Atualizar"
    
    // adicionar o array do select em outra array devido aos valores undefined que estava gerando
    for(let i = 0; i < arrayNums.length; i++){
        if (arrayNums[i] !== undefined){
        arrayFin.push(arrayNums[i])
        }
    }

    // organizar para encontrar o maior e menor número além de zerar o array do select
    arrayFin.sort(function(a,b){return a-b})
    arrayNums = []

    // fazer a soma dos valores para mostrar a soma e a média
    let soma = Number()
    for(i = 0; i < arrayFin.length; i++){
        soma += arrayFin[i]
    }

    // saida na div
    saida.innerHTML = `<p>Ao todo temos ${arrayFin.length} números cadastrados.</p>
                        <p>O menor valor informado foi ${arrayFin[0]}.</p>
                        <p>O maior valor informado foi ${arrayFin[arrayFin.length-1]}.</p>
                        <p>Somando todos os valores, temos ${soma}.</p>
                        <p>A média dos valores digitados é ${soma/arrayFin.length}</p>`
}
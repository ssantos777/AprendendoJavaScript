function contar(){
var inicio = Number(document.querySelector("input#inicio").value)
var fim =   Number(document.querySelector("input#fim").value)
var passo = Number(document.querySelector("input#passo").value)
var str = String(" ")
var contagem = document.querySelector("p#p1div2")

if (inicio > fim){
    for(inicio;inicio==fim;inicio+passo){
        str = `${str}${inicio} 👉 `
    }
    str = `${str} 🏁`
} else if (fim > inicio){
    for(inicio;inicio==fim;inicio-passo){
        str = `${str}${inicio} 👉 `
    }
    str = `${str} 🏁`
} else {
    window.alert("Valores inválidos")
}
    
    contagem.innerHTML = `${str}`
}


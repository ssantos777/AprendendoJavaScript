function gerar() {
    var n = document.querySelector("input#entrada").value
    var lista = document.querySelector("select#lista")
    if (n.length == 0){
        window.alert("Valor Inválido.")
    } else {
        n = Number(n)
        var valores = []
        lista.innerHTML = " "
        for (var i = 1; i <= 10; i++) {
            valores.push(`${n} x ${i} = ${n*i}`)   
        }

        for (i = 0; i <= 9; i++){
            let opt = document.createElement('option')
            opt.value = `lista${i}`
            opt.innerHTML = valores[i]
            lista.appendChild(opt)
        }
    }
}

/*
var opt = document.createElement("option")
opt.value = 3
opt.innerText = "Três"
lista.appendChild(opt)

function tabuada(x){
    var mult = []
    for (let i = 1; i < 11; i++){
        mult = mult.push(`${x} x ${i} = ${x*i}}`)
    }
    return mult
}
*/

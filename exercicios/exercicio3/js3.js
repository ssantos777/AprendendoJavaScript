var inicio = Number(document.getElementById("input#inicio"))
var fim =   Number(document.querySelector("input#fim"))
var passo = Number(document.getElementsByName("input#passo"))
var str = String()

if (inicio > fim){
    for(inicio;inicio>=fim;inicio+passo){
        str = str + `${inicio} 👉`
    }
    str = str + "🏁"
} else{
    for(inicio;inicio<=fim;inicio-passo){
        str = str + `${inicio} 👉`
    }
    str = str + "🏁"
}


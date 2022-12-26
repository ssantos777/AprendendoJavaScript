// function ação(parametro, param){
// return parametro retorno
// }
// ação(3) // chamada

function parimpar(n){
    if (n%2==0){
        return "par"
    } else{
        return "ímpar"
    }
}

var res = parimpar(7)

console.log(res)

console.log(parimpar(6))

function soma(a,b){
    return a+b
}

console.log(soma(5,3))

console.log(soma(2)) // Number + undefined == NaN

function soma(a=0,b=0){
    return a+b
}

console.log(soma(2))

var v = function(x){
    return x*2
}

console.log(v(6)) // DOIDERAAAAAAAAAAAAAA

// iterativo

function fatorial(x){
    let fat = 1
    for (let c = x; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))

// recursivo

function fatrec(x){
    if (x==1){
        return 1
    } else {
        return x * fatrec(x-1)
    }
}

console.log(fatrec(5))
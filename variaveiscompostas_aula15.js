let num = [120, 8, 5, 300, 12]

console.log(num)


num[3] = 6
num[5] = 400
num.push(7)

console.log(`O vetor é ${num}`)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(num) // o metodo sort coloca os items em ordem alfabetica, para que ele nao apresente erros 
console.log(num.sort(function(a,b){return a-b})) // é necessario passar essa função no parametro a fim de ordenar os numeros corretamente
                // e nao do modo "alfabetico" 12, 120, 400, 5, 6, 7, 8

// TRADICIONAL
for(let posicao = 0; posicao < num.length; posicao++){
    console.log(`Posição ${posicao} - Elemento ${num[posicao]}`)
}

//MODERNA
for (posicao in num) {
    console.log(`Posição ${posicao} - Elemento ${num[posicao]}`)
}
//pica

let pos = num.indexOf(400)
console.log(`O valor 8 está na posição ${pos}`)


let pos2 = num.indexOf(700)
console.log(`O valor 700 está na posição ${pos2}, ou seja, não foi encontrado no Array.`)
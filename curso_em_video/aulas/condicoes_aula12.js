var idade = 66
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota.`)
} else if (idade < 18 || idade > 65){ // idade >= 16 && n precisa boy
        console.log("Voto opcional.")
} else {
    console.log(`Vota.`)
}

var agora1 = new Date()
var hora = agora1.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom Dia!`)
} else if (hora < 18) {
    console.log(`Boa Tarde!`)
} else {
    console.log(`Boa Noite`)
}

var agora2 = new Date()
var diaSem = agora2.getDay()

/* 
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log(`Domingo. Apenas domingo.`)
        break
    case 1:
        console.log(`É uma segunda mas você pode tornar ela melhor!`)
        break
    case 2:
        console.log(`Boa terça para você!`)
        break
    case 3:
        console.log(`É quarta feira meu bacano!`)
        break
    case 4:
        console.log(`Que sua quinta seja iluminada!`)
        break
    case 5:
        console.log(`Uma feliz sexta para você!`)
        break
    case 6:
        console.log(`Um ótimo sábado para você!`)
        break
    default :
        console.log(`ERRO! Dia Inválido!`)
        break
}

console.log(typeof(diaSem))
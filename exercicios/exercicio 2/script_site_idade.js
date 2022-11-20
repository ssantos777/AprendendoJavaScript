var anoInput = Number(document.querySelector("input#ano").value)
var sexom = document.querySelector("input#sexo-m")
var sexof = document.querySelector("input#sexo-f")
var anoAtual = new Date().getFullYear
var idade
// fazer função pra quando clicar no botão;

function click(){
if (ano > anoAtual){
    console.alert("Ano Inválido.")
} else {
    idade = ano - anoAtual
}

}

// switch case ou if? nuncua no brasil

if(sexo == x && idade < 12){
    imagem.src = "foto-bebe-m"
    } else if(sexo == x && idade < 12){
        imagem.src = "foto-bebe-f"
    } else if (sexo == x && idade < 24){
        imagem.src = "foto-jovem-m"
    } else if (sexo == x && idade < 24){
        imagem.src = "foto-jovem-f"
    }else if (sexo == x && idade < 48){
        imagem.src = "foto-adulto-m"
    }else if (sexo == x && idade < 48){
        imagem.src = "foto-adulto-f"
    }else if (sexo == x && idade < 100){
        imagem.src = "foto-idoso-m"
    }else if (sexo == x && idade < 100){
        imagem.src = "foto-idoso-f"
    }

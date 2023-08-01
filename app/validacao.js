function verificaChute(chute) {
    const numero = +chute
    if(chuteEhInvalido(numero)){
       elementoChute.innerHTML += '<div>Valor invalido</div>'
       return
    }

    if(numeroRangePermitido(numero)){
        elementoChute.innerHTML += `
        <div>Valor invalido: o numero deve esta entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = 
        `
        <h2>Parabéns você acertou</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }
}

function chuteEhInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroRangePermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
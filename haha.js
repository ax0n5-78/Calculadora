// function food(){
    // res = document.getElementById('results')
    // rest = document.getElementById('restaurrantes').value
    // res.innerHTML = rest

    // if(rest == 8){
        // ae = 'Avaliação: 8/10'
    // } else if(rest == 3){
        // ae = 'Avaliação: 7.5/10'
    // } else{
        // ae = 'Avaliação: 6/10'
    // }

    // res.innerHTML = ae
// }

function gerar(){
    um = Number(document.getElementById('numerroUno').value)
    dos = Number(document.getElementById('numerroDos').value)
    sinal = document.getElementById('losCalculos').value
    results = document.getElementById('numerroFinale')

    if(sinal == 3){
        results.innerHTML = um + dos
    }else if(sinal == 4){
        results.innerHTML = um - dos
    }else if(sinal == 7){
        results.innerHTML = um * dos
    }else if(sinal == 1){
        results.innerHTML = um / dos
    }
}

function clear(){
    document.getElementById('numerroFinale').innerHTML = ''
}
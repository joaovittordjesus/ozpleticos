var sec=0 // Variável para os segundos
var min=0 // Variável para os minutos
var hr=0  // Variável para as horas

var interval // Variável para armazenar o intervalo (para pausar ou parar)

// Função que formata um dígito para sempre ter dois caracteres (0 à esquerda se necessário)
function doisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

// Função para iniciar o cronômetro
function start(){
    watch()
    interval= setInterval(watch,10)
}

// Função para pausar o cronômetro
function pause(){
    clearInterval(interval)
}

// Função para parar o cronômetro e resetar valores
function stop(){
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    window.alert("Você parou em: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'
}

// Função para atualizar o cronômetro
function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    // Atualiza o elemento HTML com o tempo formatado
    document.getElementById('watch').innerText=doisDigitos(hr)+':'+doisDigitos(min)+':'+doisDigitos(sec)
}

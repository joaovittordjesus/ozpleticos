var sec=0
var min=0
var hr=0

var interval

function doisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function start(){
    watch()
    interval= setInterval(watch,10)


}

function pause(){
    clearInterval(interval)

}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("Você parou em: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

}

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
    document.getElementById('watch').innerText=doisDigitos(hr)+':'+doisDigitos(min)+':'+doisDigitos(sec)
}
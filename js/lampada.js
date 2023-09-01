const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const clickLimit = 5; // Defina o número limite de cliques desejado
let contador = 0;

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
        contador += 1;
        checkClickLimit(); // Verifica o limite de cliques
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

trocaLamp() {
    lamp.src = '.img/'
}

function checkClickLimit() {
    if (contador >= clickLimit) {
        lampBroken(); // Chama a função para quebrar a lâmpada
    }
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
//lamp.addEventListener('mouseover', lampOn);
//lamp.addEventListener('mouseleave', lampOff);
//lamp.addEventListener('dblclick', lampBroken);

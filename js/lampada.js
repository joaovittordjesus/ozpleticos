const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const trocar = document.getElementById('trocar');
const clickLimit = 5; // Defina o número limite de cliques desejado
let contador = 0;

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.classList.add('luminous'); // Adiciona a classe de efeito de luminosidade
        lamp.src = './img/ligada.png';
        contador += 1;
        checkClickLimit(); // Verifica o limite de cliques
        
    }
    }


function lampOff() {
    if (!isLampBroken()) {
        lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
        lamp.src = './img/desligada.png';
        
    }
}

function lampBroken() {
    lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
    lamp.src = './img/quebrada.png';
}

function trocaLamp() {
    if (isLampBroken()){
        lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
        lamp.src = './img/desligada.png';
        contador = 0;
    }
}

function checkClickLimit() {
    if (contador >= clickLimit) {
        lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
        lampBroken(); // Chama a função para quebrar a lâmpada
        

    }
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
trocar.addEventListener('click', trocaLamp);
//lamp.addEventListener('mouseover', lampOn);
//lamp.addEventListener('mouseleave', lampOff);
//lamp.addEventListener('dblclick', lampBroken);

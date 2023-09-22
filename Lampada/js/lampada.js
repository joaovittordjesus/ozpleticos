// Seleciona os elementos HTML pelo ID e armazena-os em variáveis
const turnOn = document.getElementById('turnOn'); // Botão de ligar
const turnOff = document.getElementById('turnOff'); // Botão de desligar
const lamp = document.getElementById('lamp'); // Imagem da lâmpada
const trocar = document.getElementById('trocar'); // Botão de trocar lâmpada
const clickLimit = 5; // Define o número limite de cliques desejado
let contador = 0; // Inicializa o contador de cliques

// Função para verificar se a lâmpada está quebrada
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

// Função para ligar a lâmpada
function lampOn() {
    if (!isLampBroken()) { // Verifica se a lâmpada não está quebrada
        lamp.classList.add('luminous'); // Adiciona a classe de efeito de luminosidade
        lamp.src = './img/ligada.png'; // Altera a imagem para a lâmpada ligada
        contador += 1; // Incrementa o contador de cliques
        checkClickLimit(); // Verifica o limite de cliques
    }
}

// Função para desligar a lâmpada
function lampOff() {
    if (!isLampBroken()) { // Verifica se a lâmpada não está quebrada
        lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
        lamp.src = './img/desligada.png'; // Altera a imagem para a lâmpada desligada
    }
}

// Função para quebrar a lâmpada
function lampBroken() {
    lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
    lamp.src = './img/quebrada.png'; // Altera a imagem para a lâmpada quebrada
}

// Função para trocar a lâmpada
function trocaLamp() {
    if (isLampBroken()) { // Verifica se a lâmpada está quebrada
        lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
        lamp.src = './img/desligada.png'; // Altera a imagem para a lâmpada desligada
        contador = 0; // Reinicia o contador de cliques
    }
}

// Função para verificar o limite de cliques
function checkClickLimit() {
    if (contador >= clickLimit) { // Verifica se o contador atingiu o limite
        lamp.classList.remove('luminous'); // Remove a classe de efeito de luminosidade
        lampBroken(); // Chama a função para quebrar a lâmpada
    }
}

// Adiciona eventos de clique aos botões
turnOn.addEventListener('click', lampOn); // Botão de ligar lâmpada
turnOff.addEventListener('click', lampOff); // Botão de desligar lâmpada
trocar.addEventListener('click', trocaLamp); // Botão de trocar lâmpada


'use strict';

// Obtendo elementos HTML
const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

// Função que verifica se há uma operação pendente
const operacaoPendente = () => operador !== undefined;

// Função que realiza o cálculo
const calcular = () => {
    if (operacaoPendente()) {
        const numeroAtual = parseFloat(display.textContent.replace('.','').replace(',', '.'));
        novoNumero = true;
        const resultado = eval(`${numeroAnterior}${operador}${numeroAtual}`);
        atualizarDisplay(resultado);
    }
};

// Função que atualiza o display
const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto.toLocaleString('BR');
        novoNumero = false;
    } else {
        display.textContent += texto.toLocaleString('BR');
    }
    document.querySelector('#igual').focus();
};

// Função que insere um número no display
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach((numero) => numero.addEventListener('click', inserirNumero));

// Função que seleciona um operador
const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace('.','').replace(',', '.'));
    }
};
operadores.forEach((operador) =>
    operador.addEventListener('click', selecionarOperador)
);

// Função ativada quando o botão de igual é clicado
const ativarIgual = () => {
    calcular();
    operador = undefined;
};
document.getElementById('igual').addEventListener('click', ativarIgual);

// Função que limpa o display
const limparDisplay = () => (display.textContent = '');
document
    .getElementById('limparDisplay')
    .addEventListener('click', limparDisplay);

// Função que limpa o cálculo
const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
};
document
    .getElementById('limparCalculo')
    .addEventListener('click', limparCalculo);

// Função que remove o último número do display
const removerUltimoNumero = () =>
    (display.textContent = display.textContent.slice(0, -1));
document
    .getElementById('backspace')
    .addEventListener('click', removerUltimoNumero);

// Função que inverte o sinal do número
const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay(display.textContent * -1);
};
document.getElementById('inverter').addEventListener('click', inverterSinal);

// Função que verifica se há um decimal no display
const existeDecimal = () => display.textContent.indexOf(',') !== -1;

// Função que verifica se há um valor no display
const existeValor = () => display.textContent.length > 0;

// Função que insere um decimal no display
const inserirDecimal = () => {
    if (!existeDecimal()) {
        if (novoNumero) {
            atualizarDisplay('0,');
        } else {
            atualizarDisplay(',');
        }
    }
};
document.getElementById('decimal').addEventListener('click', inserirDecimal);

// Mapeamento de teclas para funções
const mapaTeclado = {
    0: 'numero0',
    1: 'numero1',
    2: 'numero2',
    3: 'numero3',
    4: 'numero4',
    5: 'numero5',
    6: 'numero6',
    7: 'numero7',
    8: 'numero8',
    9: 'numero9',
    '/': 'operadorDivisão',
    '*': 'operadorMultiplicação',
    '-': 'operadorSubtração',
    '+': 'operadorAdição',
    '=': 'igual',
    Enter: 'igual',
    Backspace: 'backspace',
    c: 'limparDisplay',
    Escape: 'limparCalculo',
    '.': 'decimal',
};

// Função que mapeia as teclas do teclado físico
const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click();
};
document.addEventListener('keydown', mapearTeclado);

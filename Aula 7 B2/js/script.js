"use strict";

/* Este código será aperfeiçoado na próxima aula! */

const inputs = document.querySelectorAll("input");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

/* Funções ---------------------------------------------- */

function exibirSaida(mensagem) {
    saida.textContent = mensagem;
}

function validarNota(nota) {
    /*Primeiro jeito
     if (nota >= 0 && nota <= 10) {
         return true;
     } else {
         return false;
     }

    Segundo jeito
    return (nota >= 0 && nota <= 10) ? true : false; */

    return (nota >= 0 && nota <= 10);
}

// function obterP1() {
//     return parseFloat(p1.value);
// }

// function obterP2() {
//     return parseFloat(p2.value);
// }

function obterNota(id) {
    return parseFloat(document.getElementById(id).value);
}

function calcularMedia(nota1, nota2) {
    return (nota1 + 2 * nota2) / 3;
}

function onClick() {
    const notaP1 = obterP1();
    const notaP2 = obterP2();

    if(validarNota(notaP1) && validarNota(notaP2)) {
        const mediaCalculada = calcularMedia(notaP1, notaP2);
        exibirSaida(mediaCalculada.toFixed(2));
    } else {
        exibirSaida("As notas precisam ser válidas.")
    }

}

/* Manipuladores de eventos ----------------------------- */

btnCalcular.addEventListener("click", onClick);

// document.getElementById(saida).textContent = "Oi, mundo!";
// saida.textContent = "Oi, mundo!";
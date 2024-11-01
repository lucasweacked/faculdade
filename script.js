"use strict";

/* Este código será aperfeiçoado na próxima aula! */

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");

/* Funções ---------------------------------------------- */

function obterP1() {
    return parseFloat(p1.value);
}

function obterP2() {
    return parseFloat(p2.value);
}

function calcularMedia(nota1, nota2) {
    return (nota1 + 2 * nota2) / 3;
}

function onClick() {
    const notaP1 = obterP1();
    const notaP2 = obterP2();
    const mediaCalculada = calcularMedia(notaP1, notaP2);

    saida.textContent = mediaCalculada.toFixed(2);
    console.log(mediaCalculada);
}

/* Manipuladores de eventos ----------------------------- */

btnCalcular.addEventListener("click", onClick);

// document.getElementById(saida).textContent = "Oi, mundo!";
// saida.textContent = "Oi, mundo!";
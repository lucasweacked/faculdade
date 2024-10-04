"use strict";

/* 
    Meu primeiro código JS
*/

console.log("Olá, mundo!");

// var x, y, z; // Má pratica!
let x, y, z;
x = 1;
y = 2;
z = x + y;

if(z == 3) {
    let k = 100;
    console.log("O valor de K é:", k);
}

let nome = "Lucas Barros Simon", idade = 21, eAluno = true;

console.log("Meu nome é:", nome, "|", typeof nome);
console.log("Idade:", idade, "|", typeof idade);
console.log("Sou aluno?", eAluno, "|", typeof eAluno);

let p1, p2, notaFinal, situacao, conceito;

p1 =  2.5;
p2 = 7.5;

notaFinal = (p1 + 2 * p2) / 3;

//Sobrino
if(media >= 5) {
    situacao = "aprovado";
} else {
    situacao = "reprovado";
}

if(media >= 9) {
    conceito = "A";
} else if (media >= 7) {
    conceito = "B";
} else if (media >= 5) {
    conceito = "C";
} else if (media >= 2) {
    conceito = "D";
} else {
    conceito = "E";
}

//Minha versão
// if(notaFinal >= 5) {
//     console.log("O aluno foi aprovado!");
// } else {
//     console.log("O aluno foi reprovado.");
// }

// if(notaFinal >= 9) {
//     console.log("O aluno é nota A");
// } else if(notaFinal >= 7 && notaFinal < 8.9) {
//     console.log("O aluno é nota B");
// } else if(notaFinal >= 5 && notaFinal < 6.9) {
//     console.log("O aluno é nota C");
// } else if(notaFinal >= 2 && notaFinal < 4.9) {
//     console.log("O aluno é nota D");
// } else {
//     console.log("O aluno se chama Kallani e a nota é E");
// }

// console.log("A sua nota final é:", notaFinal.toFixed(2));
// console.log(`A media é ${notaFinal.toFixed(1)}`);

// let, v1, v2, v3, v4, v5, v6;
// v1 = "San";
// v2 = "tos";
// v3 = "5";
// v4 = 5;
// v6 = true;

// console.log(v1+v2);
// console.log(v3+v4);
// console.log(v4+v5);
// console.log(v6+v6);
"use strict";

//Declaração de função

function calculaMedia(p1, p2) { //Parametro
    let media = (p1 + 2 * p2) / 3;
    return media.toFixed(2);
}

console.log("Media do Aluno 1:", calculaMedia(7, 5.5)); //Argumento
console.log("Media do Aluno 2:", calculaMedia(10, 8.5));
console.log("Media do Aluno 3:", calculaMedia(5, 5.5));

let mediaAluno4 = calculaMedia(6, 6.5);
console.log("Media do Aluno 4:", mediaAluno4);

//Expressão de função

let soma  = function (n1 = 0, n2 = 0) {
    // let resultado = n1 + n2;
    return n1+n2;
};

//Arrow Function
let somav2  = (n1 = 0, n2 = 0) => n1 + n2;

console.log("A soma é:", somav2(10, 10));

for(let i = 0;i <= 10;i++) {
    console.log(i);
}

console.log("----------");

let i = 11;
while (i > 0) {
    
    i--;
    console.log(i);
}

console.log("----------");

do {
    i+= 2;
    console.log(i);
} while(i < 20);

console.log("----------");

function parOuImpar(num) {
    if(num % 2 == 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

console.log("5 é par ou impar?", parOuImpar(5));
console.log("6 é par ou impar?", parOuImpar(6));
console.log("1 é par ou impar?", parOuImpar(1));
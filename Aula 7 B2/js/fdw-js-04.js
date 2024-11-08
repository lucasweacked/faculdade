"use strict";

let p1 = 5;

const arrayNotas = [ 5.5, 7.5, 8, 10, 9,5 ];

console.log("Tipo:", typeof arrayNotas);

const obj1 = {
    nome: "Lucas Barros",
    idade: 21,
    eAluno: true
};

const obj2 = {
    nome: "Carol",
    idade: 21,
    eAluno: true
};

obj1.idade = 22;
obj1.altura = 1.77;

delete obj1.altura;

console.log(obj1);

// const arrayObj = [ ojb1, obj2 ];

const arrayObjs = [];

arrayObjs.push(obj1);
arrayObjs.push(obj2);

console.table(arrayObjs);

console.log();
console.log("Objeo JS para JSON:");
const strJSON = JSON.stringify(arrayObjs);
console.log(strJSON);

console.log();
console.log("JSON para Objetos JS:");
const arrayobjJSON = JSON.parse(strJSON);
console.table(arrayobjJSON);
"use strict";

const arrayMix = [3, 5.5, "SI", true];
const arrayProfs = [];
arrayProfs[0] = "Asenjo";

arrayProfs.unshift("Avelino", "Paz"); //Coloca nos primeiros indices
let elementoRemovido = arrayProfs.shift();
console.log(elementoRemovido);

arrayProfs.push("Luiz", "Maua", "Cordella"); //Coloca nos ultimos indices
arrayProfs.pop();

arrayProfs.splice(1, 1)
arrayProfs.splice(1, 0, "Guerra", "Sobrino", "Cordella");

arrayProfs.sort();

console.table(arrayProfs);



const medias = [10, 8, 5, 9, 2, 5, 7, 3, 9, 4];
for(let i=0; i<medias.length; i++) {
    console.log(medias[i]);
}

console.log("-------------");

medias.forEach(
    function(element) {
        console.log(element);
    }
);



// arrayMix[0] = 5;
// console.log(arrayMix);
// console.log("Tipo:", typeof arrayMix);
// console.log("Elementos:", arrayMix.length);
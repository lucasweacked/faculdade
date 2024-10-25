const arrayA = ['Galandriel', 'Elrond', 'Sauron', 'Morgoth', 'Legolas', 'Melkor', 'Galandriel', 'Galandriel', 'Gimli', 'Aragorn', 'Frodo'];
let result;
function lordIndex(array, nomeEldar){
    return array.indexOf(nomeEldar);
}
function lordDead(array, nomeEldar){
    const indexOfNomeEldar = lordIndex(array, nomeEldar);
    return indexOfNomeEldar == -1 ? false : array.splice(indexOfNomeEldar, 1);
    // if (indexOfNomeEldar == -1) {
    //     return false;
    // }
    // const existEldar = array.splice(indexOfNomeEldar,1)
    // return existEldar;
}

function limparArray(array, nomeEldar){
    const newArray = array.slice();
    let indexOfNomeEldar = lordIndex(newArray, nomeEldar);
    // for (let index = 0; index < newArray.length; index++) {
    //     const indexOfNomeEldar = newArray.indexOf(nomeEldar);
    //     indexOfNomeEldar == -1 ? false : newArray.splice(indexOfNomeEldar,1);
    // }
    // return newArray;
    while (indexOfNomeEldar != -1) {
        newArray.splice(indexOfNomeEldar, 1);
        indexOfNomeEldar = lordIndex(newArray,nomeEldar);
    }
    return newArray;
}

function existLord(array, nomeEldar){
    return (array.includes(nomeEldar)) ? 1 : 0 ;
}

const existeBagulho = (array, nomeEldar) => {
    return (array.includes(nomeEldar)) ? 1 : 0 ;
}

// result = lorIndices(arrayA, "Galandriel");
// result = lordDead(arrayA,"Galandriel");
// result = lordDead(arrayA, "Galandriel");
// result = limparArray(arrayA, 'Galandriel');

// result = existLord(arrayA, "Galandriel");
// result = existeBagulho(arrayA,"Galandriel");
// console.log(result);


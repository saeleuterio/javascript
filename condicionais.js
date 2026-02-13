const idade = 15;

// if (idade >= 18) {
//   console.log("É maior de idade!");
// } else {
//   console.log("É menor de idade!");
// }

idade >=18 ? console.log('Maior de idade') : console.log('Menor de idade')

// if (idade < 18) {
//   console.log("É menor de idade");
// }

// Entre 9 e 10: Excelente
// Entre 7 e 8: Bom
// Entre 4 e 6: Médio
// Entre 0 e 3: Ruim

const notaDoAluno = 1;

// if (notaDoAluno >= 9) {
//   console.log("Nota Excelente!");
// } else if (notaDoAluno >= 7) {
//   console.log("Nota Boa!");
// } else if (notaDoAluno >= 4) {
//   console.log("Nota Média!");
// } else {
//   console.log("Nota Ruim!");
// }

notaDoAluno >=9 ? console.log("Nota Excelente!") : 
    notaDoAluno >=7 ? console.log("Nota Boa!") :
        notaDoAluno >=4 ? console.log("Nota Média!") :
            console.log("Nota Excelente!");
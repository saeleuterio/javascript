const readline = require('readline')

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

leitor.question('Qual é o seu nome? ', (nome) => {
  console.log('Olá,', nome)
  console.log('Boa vindas ao nosso sistema!')

  leitor.question('Qual é a sua idade? ', (idade) => {

    if (idade > 18) {
        console.log('Uau! Você pode tirar a sua CNH!')
    } else {
        console.log('Você não pode tirar a sua CNH!')
    }

    leitor.close()
  })

})

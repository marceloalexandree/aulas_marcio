const express = require ('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Marcelo Lindo')
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})
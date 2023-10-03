const express = require ('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Vai Palmeiras')
})

app.listen(3000, () => {
    console.log('app na porta 3k')
})
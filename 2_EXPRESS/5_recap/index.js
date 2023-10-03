const express = require ("express")

const app = express()

app.get('/', (req, res) =>{
    res.send("SANTOOOOOS")
})

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})
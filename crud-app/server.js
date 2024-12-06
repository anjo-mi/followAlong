const express = require('express')
const app = express()

app.listen(3000, (req,res) => {
    console.log('express yourself')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
console.log('node way')
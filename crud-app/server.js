const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.listen(3000, (req,res) => {
    console.log('express yourself')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    console.log(req.body)
})
console.log('node way')
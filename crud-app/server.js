const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://nojaimk:N**buf52@cluster0.vi3kp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(console.log('connected')).catch(err => console.log(err))

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
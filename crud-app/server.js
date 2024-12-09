const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

const connectionString = 'mongodb+srv://nojaimk:N**buf52@cluster0.vi3kp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

MongoClient.connect(connectionString)
    .then((client) => {
        console.log('connected')

        // create a variable that has access to the database
        const db = client.db('crud-app')
        // use the database variable to create a variable with access to a 'collection'
        const quotes = db.collection('quotesForCollection')

        app.set('view engine', 'ejs')
        
        app.use(express.urlencoded({extended: true}))
        
        app.listen(3000, () => {
            console.log('express yourself')
        })
        
        app.get('/', (req, res) => {
            const cursor = quotes.find().toArray().then(results => {
                console.log(results)
            })
            .catch(err => console.log(err))
            res.sendFile(__dirname + '/index.html')
        })
        
        app.post('/quotes', (req, res) => {
            console.log(req.body)
            quotes.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.redirect('/')
                })
                .catch(err => console.log(err))
        })
        
    })
    .catch(err => console.log(err))


console.log('node way')
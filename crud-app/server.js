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


        // after installing ejs, make sure the app is set to use it, view engine is required for first argument in order to use ejs to render html
        // this is used w res.render inside app.gethtml
        app.set('view engine', 'ejs')
        
        app.use(express.urlencoded({extended: true}))
        
        app.use(express.static('public'))

        app.use(express.json())
        
        app.listen(3000, () => {
            console.log('express yourself')
        })
        
        app.get('/', (req, res) => {
            const cursor = quotes.find().toArray().then(results => {
                console.log(results)
                res.render('index.ejs', {quotes: results})
            })
            .catch(err => console.log(err))
            // res.sendFile(__dirname + '/index.html')
        })
        
        app.post('/quotes', (req, res) => {
            quotes.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    res.redirect('/')
                })
                .catch(err => console.log(err))
        })

        app.put('/quotes', (req,res) => {
            quotes.findOneAndUpdate(
                {name: 'butt'},
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote,
                    },
                },
                // {
                //     upsert: true
                // }
            ).then(result => {
                res.json('success')
            }).catch(err => {
                console.log(err)
                res.status(500).json({status: 'error'})
            })
        })

        app.delete('/quotes', (req, res) => {
            quotes.deleteOne({name : req.body.name},)
                .then(result => {
                    if (result.deletedCount === 0) {
                        return res.json('you could eat off it')
                    }
                    res.json('the poop is gone')
                })
                .catch(err => console.log(err))
        })
        
    })
    .catch(err => console.log(err))


console.log('node way')
// const http = require('http');

const express = require('express');

const app = express();


let notes = [
    {
      id: "1",
      content: "HTML is easy",
      important: true
    },
    {
      id: "2",
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: "3",
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(notes));
// });

app.get('/', (req,res) => {
    res.send('<h1>Hello World</h1>')
});

app.get('/api/notes/:id', (req,res) => {
    const id = req.params.id;
    const note = notes.find(note => note.id === id);
    if (note) {
        res.json(note);
    } else {
        res.status(404).end();
    }
})

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    notes = notes.filter(note => note.id !== id);
    res.status(204).end();
})

const PORT = 9999;

app.listen(PORT, () => {
    console.log(`port: ${PORT} is now listening`)
});
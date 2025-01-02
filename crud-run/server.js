const express = require('express'); 
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || port, () => {
    console.log(`listening on port ${port}`);
});
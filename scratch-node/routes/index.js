const express = require('express');
const router = express.Router();

// desc         login landing page
// route        GET /

router.get('/', (req,res) => {
    res.send('login')
})

// desc     Dashboard
// route    GET dashboard

router.get('/dashboard', (req,res) => {
    res.send('dashboard')
})


module.exports = router;
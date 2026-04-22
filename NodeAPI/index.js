const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    res.send('<html><body>INSIDE SEARCH API.</body></html>');
});

app.get('/view', (req, res) => {
    res.send('<html><body>INSIDE VIEW API.</body></html>');
});

app.listen(5000, '0.0.0.0', () => {
    console.log('EXPRESS Server Started at Port No: 5000');
});
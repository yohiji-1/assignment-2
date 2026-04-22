const express = require('express');
const app = express();

app.use(express.json());

app.get('/search', (req, res) => {
    res.send('<html><body>INSIDE SEARCH API.</body></html>');
});

app.get('/view', (req, res) => {
    res.send('<html><body>INSIDE VIEW API.</body></html>');
});

app.post('/login', (req, res) => {
    res.send('<html><body>INSIDE LOGIN API.</body></html>');
});

app.put('/updateprofile', (req, res) => {
    res.send('<html><body>INSIDE UPDATE PROFILE API.</body></html>');
});

app.delete('/del', (req, res) => {
    res.send('<html><body>INSIDE DELETE API.</body></html>');
});

app.listen(5000, '0.0.0.0', () => {
    console.log('EXPRESS Server Started at Port No: 5000');
});
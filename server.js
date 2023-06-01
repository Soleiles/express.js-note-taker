const express = require('express');
const fs = require('fs');
const path = require('path');
const router = require('./routes/index.js');

const PORT = process.env.PORT || 3001;
const app = express();

// ****** Middleware ****** //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router);

// ****** GET Route for homepage ****** //
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
// ****** GET Route for notes page ****** //
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});
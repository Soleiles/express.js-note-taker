// ****** Dependencies ****** //
const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const app = express();



app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});
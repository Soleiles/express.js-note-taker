const express = require('express');
const router = require('./api/notes');
const app = express();

app.use('/api', router);

module.exports = app;
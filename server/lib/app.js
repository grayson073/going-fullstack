const express = require('express');
const app = express();
const games = require('./routes/games');
app.use(express.json());

app.use('/api/games', games);

module.exports = app;
const express = require('express');
const app = express();
const games = require('./routes/games');
const genres = require('./routes/genres');
app.use(express.json());

app.use('/api/games', games);
app.use('/api/genres', genres);

module.exports = app;
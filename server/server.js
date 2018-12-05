const express = require('express');
const app = express();
// const shortid = require('shortid');
const pg = require('pg');


const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
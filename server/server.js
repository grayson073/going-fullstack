const express = require('express');
const app = express();
// const shortid = require('shortid');
// const fs = require('fs');

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
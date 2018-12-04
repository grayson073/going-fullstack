const express = require('express');
const app = express();
const shortid = require('shortid');
const fs = require('fs');

function readData() {
  const data = fs.readFileSync('./data/students.json', 'utf8'); // students -> something else
  return JSON.parse(data);
}

function saveData(students) { // students -> something else
  const json = JSON.stringify(students, true, 2); // students -> something else
  fs.writeFileSync('./data/students.json', json);
}

app.use(express.json());

app.get('/api/students', (req, res) => {  // students -> something else
  const students = readData(); // students -> something else
  if(req.query.name) { // Is name still current?
    const match = req.query.name.toLowerCase(); // Is name still current?
    const filtered = students.filter(s => { // students -> something else, s -> something else
      return s.name.toLowerCase().startsWith(match); // s -> something else
    });
    res.json(filtered);
  } else {
    res.json(students); // students -> something else
  }
});

app.post('/api/students', (req, res) => { // students -> something else
  const students = readData();  // students -> something else
  const student = req.body;  // student -> something else
  student.id = shortid.generate();  // student -> something else
  students.push(student);  // students -> something else
  saveData(students); // students -> something else
  res.json(student); // student -> something else
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
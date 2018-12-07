const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

app.use(morgan('dev'));

// FROM DAY 1
// function readData() {
//   const data = fs.readFileSync('./data/campgrounds.json', 'utf8');
//   return JSON.parse(data);
// }

// function saveData(campgrounds) {
//   const json = JSON.stringify(campgrounds, true, 2);
//   fs.writeFileSync('./data/campgrounds.json', json);
// }

app.use(express.json());

const Client = pg.Client;
const dbUrl = 'postgress://localhost:5432/banana';
const client = new Client(dbUrl);
client.connect();

app.get('/api/campgrounds', (req, res) => {
  client.query(`
    SELECT id, name, forest, season_dates FROM campgrounds;
  `)
    .then(result => {
      res.json(result.rows);
    });

  app.get('/api/campgrounds/:id', (req, res) => {
    client.query(`
      SELECT * FROM campgrounds WHERE id = $1;
    `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  });
});

app.post('/api/campgrounds', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO campgrounds (name, forest, season_dates)
    VALUES($1, $2, $3)
    RETURNING id, name, forest, season_dates as "seasonDates";
  `,
  [body.name, body.forest, body.seasonDates])
    .then(result => {
      res.json(result.rows[0]);
    });
});

// FROM DAY 1
// const campgrounds = readData();
// const campground = req.body;
// campground.id = shortid.generate();
// campgrounds.push(req.body);
// saveData(campgrounds);

const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});
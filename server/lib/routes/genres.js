const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router();

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, category, short_name as "shortName"
      FROM genre
      ORDER BY category;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
      INSERT INTO genre (category, short_name)
      VALUES ($1, $2)
      RETURNING id, category, short_name as "shortName";
    `,
    [body.category, body.shortName]
    )
      .then(result => {
        res.json(result.rows);
      });
  });


module.exports = router;
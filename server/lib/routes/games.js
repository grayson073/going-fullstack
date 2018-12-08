const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router();

router
  .get('/', (req, res) => {
    client.query(`
      SELECT
        id,
        title,
        year,
        image_url as "imageUrl",
        genre_id as "genreId"
      FROM game
      ORDER BY title;
    `)
      .then(result => {
        res.json(result.rows);
      });
  });

module.exports = router;
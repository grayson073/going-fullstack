const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router();

router
  .get('/', (req, res) => {
    client.query(`
      SELECT
        game.id,
        game.title,
        game.year,
        game.image_url as "imageUrl",
        genre.id as "genreId",
        genre.category as genre
      FROM game
      JOIN genre
      ON game.genre_id = genre.id
      ORDER BY title;
    `)
      .then(result => {
        res.json(result.rows);
      });
  });

module.exports = router;
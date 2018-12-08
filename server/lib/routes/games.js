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
  })

  .get('/:id', (req, res) => {
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
      WHERE game.id = $1
    `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;
    client.query(`
      INSERT INTO game (title, year, genre_id, image_url)
      VALUES ($1, $2, $3, $4)
      RETURNING
        id,
        title,
        year,
        genre_id as "genreId",
        image_url as "imageUrl";
    `,
    [body.title, body.year, body.genreId, body.imageUrl])
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;
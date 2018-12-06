const pg = require('pg');
const Client = pg.Client;
const dataBaseUrl = 'postgres://localhost:5432/champions';
const client = new Client(dataBaseUrl);

client.connect()
    .then(() => {
        return client.query(` 
    DROP TABLE IF EXISTS grapplers;
    `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });
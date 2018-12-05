const pg = require('pg');
const Client = pg.Client;
const dataBaseUrl = 'postgres://localhost:5432/school';
const client = new Client(dataBaseUrl);

client.connect() 
    .then(() => {
        return client.query(`
        CREATE TABLE champions (
            id SERIAL PRIMARY KEY, 
            name VARCHAR(256) NOT NULL, 
            age INTEGER,
            champ BOOLEAN);

        `);
    })
    .then(console.log('new table has been created'), 
        err => console.log(err)
    )
    .then(() =>{
        client.end();
    });
const pg = require('pg');
const Client = pg.Client;
const dataBaseUrl = 'postgres://localhost:5432/school';
const grapplers = require('./grapplers.js');
const client = new Client(dataBaseUrl);

client.connect() 
    .then(() => {
        return Promise.all(
            grapplers.map(grappler => {
                return client.query (`
    INSERT INTO grapplers (name, age, champ)
    VALUES($1, $2, $3)
    RETURNING id, name, age, champ;`,
                [grappler.name, grappler.age, grappler.champ]);
            })
        );
    })
    .then(
        () => console.log('seed data load complete'), 
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });
const pg = require('pg');
const Client = pg.Client;
const dataBaseUrl = 'postgres://localhost:5432/school';
const client =  new Client(dataBaseUrl);

client.connect()
.then(( => {
    return.client.q
})
/**
 * Created by kyracrowston on 1/20/16.
 */
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/talent_db';
var client = new pg.Client(connectionString);

client.connect();

//var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY,')
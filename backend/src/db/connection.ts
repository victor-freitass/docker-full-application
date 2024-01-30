import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const client = new pg.Pool({
    host: 'db', 
    port: 5432,
    user: 'myname', 
    password: 'mypassword', 
    database: 'docker',
    // ssl: false
});


export default client;
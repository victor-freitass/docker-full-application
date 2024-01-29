import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const client = new pg.Pool({
    host: 'database', 
    user: 'postgres',
    password: 'mypassword', 
    database: 'docker'
});

export default client;
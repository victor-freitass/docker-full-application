import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const client = new pg.Pool({
    host: 'database', 
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD, 
    database: process.env.POSTGRES_DATABASE
});

export default client;
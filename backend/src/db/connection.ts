import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

// const conString = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";
console.log(process.env);

const client = new pg.Pool({
    host: 'db', 
    port: 5432,
    user: process.env.POSTGRES_USER, 
    password: process.env.POSTGRES_PASSWORD, 
    database: process.env.POSTGRES_DB
});

export default client;
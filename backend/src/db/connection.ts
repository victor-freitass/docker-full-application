import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { user, password, database } = process.env;

// const conString = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";

const client = new pg.Pool({
    host: 'db', 
    port: 5432,
    user: user, 
    password: password, 
    database: database
});

export default client;
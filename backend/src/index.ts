import express, { urlencoded } from 'express';
import cors from 'cors';
import client from './db/connection';

const app = express();

app.use(express.json());
app.use(cors());
app.use(urlencoded({extended: true}));

app.get('/users', async (req, res) => {
    const users = (await client.query('SELECT * FROM users')).rows;
    console.log(users);
    if (!users.length) {
        return res.send(null);
    }
    return res.json(users);    
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    client.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    return res.status(204).send();
}); 

client.connect().then(() => {
    app.listen(3000);
});
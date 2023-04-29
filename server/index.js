import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import dotenv from 'dotenv';

import Connection from './database/db.js';
import route from './routes/routes.js';


// dotenv.config();
const app = express();




// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/', route);

Connection();

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));




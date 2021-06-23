import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv/config';
import morgan from 'morgan';
import dbConfig from './config/dbConfig.js';
import officialDetailsRoutes from './routes/officialDetailsRoutes.js';

app.use(cores());
app.options('*', cors());
dbConfig();

const api = process.env.API_URL;
app.use(express.json());
app.use(morgan('tiny'));
app.use(`${api}/officialDetails`, officialDetailsRoutes);

app.listen(5000, () => {
  console.log('Server is running on 5000!');
});

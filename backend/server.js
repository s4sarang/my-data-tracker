import express from 'express';
import dotenv from 'dotenv/config';

const app = express();

const api = process.env.API_URL;

app.get(`${api}`, (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, () => {
  console.log('Server is running on 5000!');
});

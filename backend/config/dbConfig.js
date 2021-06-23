import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

const MONGO_URI = process.env.MONGO_URI;

const dbConfig = () => {
  const connect = mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('MONGO DB CONNECTION SUCCESSFUL!'.green.italic.underline);
    })
    .catch((error) => {
      console.log(`${error}`.red.bold);
    });
};

export default dbConfig;

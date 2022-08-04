import { json, urlencoded } from 'body-parser';
import cors from 'cors';

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === 'develop') {
  console.log('Connecting to <DEVELOPMENT DB>.....');
  mongoose.connect(process.env.DB_DEVELOPMENT_CONNECTION_STRING);
} else {
  console.log('Connecting to <PRODUCTION DB>.....');
}

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Well done!');
});

app.listen(PORT, () => {
  console.log(`The application is listening on port ${PORT}!`);
});

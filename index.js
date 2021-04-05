import cors from 'cors';
import express from 'express';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import consola from 'consola';

// import application constants
import { DB, PORT } from './src/constants';

// Initializing the express application
const app = express();

// Applying application middlewares
app.use(cors());
app.use(json());

const main = async () => {
  try {
    // connect with the database
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    consola.success('DATABASE CONNECTED ... ');

    // Start application listening for request on server
    app.listen(PORT, () => {
      consola.success(`SERVER RUNNING ON PORT: ${PORT}`);
    });
  } catch (err) {
    consola.error(`Unable to start the server \n${err.message}`);
  }
};

main();

/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

const app = express();

app.enable('trust proxy');

app.use(
  cors(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
);

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log('🚀 Server running...'));

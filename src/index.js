/* eslint-disable no-console */
import '@babel/polyfill';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'NodeJS - Express - Postgres - Sequelize App Template',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

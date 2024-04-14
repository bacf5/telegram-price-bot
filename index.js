require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 4040;
const { handler } = require('./controller');

const app = express();
app.use(express.json());

app.post('*', async (req, res) => {
  console.log(req.body);
  res.send(await handler(req, 'POST'));
});
app.get('*', async (req, res) => {
  res.send(await handler(req, 'GET'));
});

app.listen(PORT, function (error) {
  if (error) console.log(error);
  console.log('Server listening on Port', PORT);
});

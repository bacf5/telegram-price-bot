const express = require('express');
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

app.post('*', async (req, res) => {
  console.log(req.body);
  res.send('hello post');
});
app.get('*', async (req, res) => {
  res.send('hello get');
});

app.listen(PORT, function (error) {
  if (error) console.log(error);
  console.log('Server listening on Port', PORT);
});

// https://api.telegram.org/bot6725242290:AAGbYYi3_t8WncBSWGuEGmp0dqTypLaVPnU/

// BOT_TOKEN: 6725242290:AAGbYYi3_t8WncBSWGuEGmp0dqTypLaVPnU

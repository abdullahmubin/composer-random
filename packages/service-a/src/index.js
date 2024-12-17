// packages/service-a/src/index.js
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello from Service A!');
});

app.listen(port, () => {
  console.log(`Service A listening at http://localhost:${port}`);
});

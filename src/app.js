const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;



app.all("", (req, res) => {
  const now = new Date().toISOString();
  const info = {
    time: now,
    method: req.method,
    path: req.path,
    query: req.query,
    headers: req.headers,
    ip: req.ip,
  };

  console.log('🐝 Honeypot triggered:', JSON.stringify(info, null, 2));

  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`🐝 Honeypot server listening on port ${port}`);
});

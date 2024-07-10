// Create web server
const express = require('express');
const app = express();

// Create a route to handle POST requests to /comments
app.post('/comments', (req, res) => {
  res.json({response: 'You sent a POST request'});
});

// Start the server on port 4001
app.listen(4001, () => {
  console.log('Your app is listening on port 4001!');
});
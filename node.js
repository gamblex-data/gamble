const express = require('express');
const app = express();

// Define the route for GET request on root (/)
app.get('/', (req, res) => {
  res.send('Hello');
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const express = require('express');
const app = express();
const port = 3000; // You can use any port you want

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, this is a simple web app!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

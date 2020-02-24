const express = require('express');
const router = require('./routes/index');
// Constants
const PORT = 8080;

// Application
const app = express();

// Connect router directory
app.use('/api', router);

// initialize server
app.listen(PORT, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server listening on port ${PORT}`);
});

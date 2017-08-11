const express = require('express');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');

require('./server/services/passport');

mongoose.connect('keys.mongoURI');

const app = express();

require('./server/config/routes/authRoutes')(app);

app.listen(8000, () => {
  console.log('Listening to port 8000');
});

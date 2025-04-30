const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const thoughtRoutes = require('./routes/thoughtRoutes');
const { PORT } = require('./constants');

mongoose.connect('mongodb://host.docker.internal:27017/thoughtsDB', {
  useNewUrlParser: true,
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(thoughtRoutes);

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

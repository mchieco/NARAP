const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

// const app = express();
const mongoose = require('mongoose');
// module variables
// const RA = require('@/models/ramodel.js');
// Connection URL
const url = 'mongodb+srv://KyleHorton:NARAP@cluster0-brftu.mongodb.net/NARAP_RA?retryWrites=true&w=majority';

// Connect using mongoose
mongoose.connect(url, { useNewUrlParser: true });

// open a connection and get a db handler
const db = mongoose.connection;
// error handling
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  // we're connected!
  console.log('Connected to server!');
});

app.listen(port, () => console.log(` Server listening on port ${port}!`));

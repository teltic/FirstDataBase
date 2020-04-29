// npm packages that I want to import
const express = require('express');
require('dotenv').config();
const db = require('./config/database');

// constants from my settings file
let {
  port,
  appName,
  dburi
} = require('./config/settings');

const app = express();
db();

app.listen(port, () => {
  console.log(`${appName} is listening on port ${port}...`);
});
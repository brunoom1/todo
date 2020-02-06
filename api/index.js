require('dotenv').config();
require('config/database')(process.env.ENV)

const express = require ('express');
const app = express();
app.use(express.json());
require('routes')(app);
app.listen(process.env.PORT);

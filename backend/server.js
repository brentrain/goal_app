const express       = require('express');
const dotenv        = require('dotenv').config();

const port          = process.env.PORT || 5000;

const app           = express();

app.use('/api/goal', require('./routes/goalRoutes.js'))





app.listen(port, () => console.log(`listening on port ${port}`))

const express = require('express');
const cors = require('cors');
const app = express();

app.set('port', process.env.PORT);

//  MIDDLEWARES
app.use(cors());
app.use(express.json());

// RUTAS
app.use(`/api/items/`, require('./routes/routes'));

module.exports = app;

const express = require('express');
const HookController = require('./controllers/controller.js');
const bodyParser = require('body-parser');

const app = express().use(bodyParser.json());;

HookController(app);

app.listen(3000);
console.log('listening to port 3000');

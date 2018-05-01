const express = require('express');
const app = express();
// var {slackBot} = require('./slackBot.js');

app.use(require('./routes'));

app.listen(3000, () => console.log('listening on port 3000!'))
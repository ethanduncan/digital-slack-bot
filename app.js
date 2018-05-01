const express = require('express')
const app = express();
var slackBot = require('./slackBot.js')
// var {slackBot} = require('./slackBot.js');

var router = express.Router();

app.use(require('./routes'));

router.get('/', function(req,res) {
    res.json({ message: slackBot.sendNotification("hello") });   
});

app.use('/', router);

app.listen(3000, () => console.log('listening on port 3000!'))
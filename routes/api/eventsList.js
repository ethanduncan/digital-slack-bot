var router = require('express').Router();
var {google} = require('googleapis');

const config = require("./../../config.js");
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

//Using a service account for bot use
let privatekey = require('./../../private_key.json')

// configure a JWT auth client
let jwtClient = new google.auth.JWT(
  privatekey.client_email,
  null,
  privatekey.private_key,
  ['https://www.googleapis.com/auth/calendar']);
//authenticate request
    jwtClient.authorize(function (err, tokens) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Successfully connected!");
     }
    });

//Get todays date
var today = new Date()

var timeMin = new Date(today.getFullYear(), today.getMonth(), today.getDate(),00,00,00,00)
console.log(timeMin)

var timeMax = new Date(today.getFullYear(), today.getMonth(), today.getDate(),24,59,00,00)
console.log(timeMax)

//Google Calendar API
let calendar = google.calendar('v3');

function getList() {
        calendar.events.list({ auth: jwtClient, calendarId: config.email, timeMax: timeMax, timeMin: timeMin }, function(err, resp) {
        resp.data.items.forEach(function(cal) {
            var message = cal.summary + " - " + cal.id + " - " + cal.creator.displayName + " - " + cal.start.dateTime;
            return message
     });
    });
}

router.get('/events', (req, res) => res.send('resp'))

module.exports = router;

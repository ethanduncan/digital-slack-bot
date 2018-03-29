const express = require('express')
const app = express()
const {google} = require('googleapis')
const calendar = google.calendar('v3')

const API_KEY = 'AIzaSyCojevKT5t_L7H75g6ysZFAjx9pX8Zi8rU'

var resp = calendar.calendars.get({
    auth: API_KEY,
    calendarId: 'ethan.duncan13@gmail.com'
},(err,response) => {
    if(err){
        console.error(err)
        return err
    }
    console.log(response)
    return response
})

app.get('/', (req, res) => res.send(resp))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
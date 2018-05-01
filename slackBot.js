const { IncomingWebhook, WebClient } = require('@slack/client');
const config = require("./config.js")

const notification = new IncomingWebhook(config.slack.webhookUrl);
const currentTime = new Date().toTimeString();

module.exports.sendNotification = function (message){
    notification.send(message, (error, resp) => {
    if (error) {
        return console.error(error);
    }
    return console.trace()
        });
    console.log('test')
}


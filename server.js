var express = require("express");
var http = require("http");
var app = express();

// Ping the app
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendStatus(200);
});

// Request listener
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

const activities_list = [
    `/help`,
    `/setup`,
    `/invite`,
    `/website`,
    `/vote`,
    ];

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by Lejhand")
const hook = new Discord.WebhookClient('WEBHOOK ID', 'WEBHOOK TOKEN');
hook.send("Bot Is Online")

setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000);
});

client.login('YOUR TOKEN');

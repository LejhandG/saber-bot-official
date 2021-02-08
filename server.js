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
    `/invite`,
    `/website`,
    `/vote`,
    ];

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by Lejhand")
const hook = new Discord.WebhookClient('780685250149482528', 'bZ7YupqNKT_nWdmJX-9nNen5rIPlsfnGdTqpbTCVO8YKNZg7q7BSpD6MlbFE16K0EbnW');
hook.send("Bot Is Online")

setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000);
});

client.login('NzUxMDc5NjQzOTgwODkwMjI1.X1D3bQ.4HuQT9Gh9K0OZpWAzBfCX7yVYkY');

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

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by Lejhand")
const hook = new Discord.WebhookClient('780685250149482528', 'bZ7YupqNKT_nWdmJX-9nNen5rIPlsfnGdTqpbTCVO8YKNZg7q7BSpD6MlbFE16K0EbnW');
hook.send("Bot Is Online !!")

client.user.setActivity(`/help`, {
type: "WATCHING"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login('NzUxMDc5NjQzOTgwODkwMjI1.X1D3bQ.4HuQT9Gh9K0OZpWAzBfCX7yVYkY');
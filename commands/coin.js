const Discord = module.require('discord.js');

var hd = [
    "Heads",
    "Tails"
];

module.exports = {
    name: "coin",
description: "command description",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    message.channel.send(message.author.username + " You Flipped: " + (hd[Math.floor(Math.random() * hd.length)]));
}
}

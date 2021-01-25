const Discord = module.require('discord.js');
const { MessageEmbed } = require('discord.js');

var hd = [
    "Heads",
    "Tails"
];

module.exports = {
    name: "coin",
description: "Coin Flip",
alias: ["coinflip", "flip"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let response = (hd[Math.floor(Math.random() * hd.length)])
    
    let product = new MessageEmbed()
    .setTitle("Heads or Tails")
    .setDescription(message.author.username + " You Flipped: " + response)
    .setColor("RANDOM")
    .setFooter(message.author.tag, message.author.avatarURL())
    
    message.channel.send(product);
}
}

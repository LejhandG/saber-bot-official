const Discord = require("discord.js")
const db = require("quick.db")
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "setsuggest",
    timeout : 30000,
description: "Set suggestion channel",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: /setsuggest`)
        .setDescription(`
**Description:** 
Set the channel for the suggestions
**Usage:**
/suggest [channel]
**Example:**
/suggest #suggestions
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to do that!");

let channel = message.mentions.channels.first()
 
    if(!channel) {
      return message.channel.send(wrong)
    }
 
    //Now we gonna use quick.db
 
    db.set(`sugchannel_${message.guild.id}`, channel.id)
 
    message.channel.send(`Suggestion Channel is set as ${channel}`)
}
}

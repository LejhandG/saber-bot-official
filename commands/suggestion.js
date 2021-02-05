const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
const Discord = require('discord.js')

module.exports = {
    name: "suggestion",
description: "Send suggestion",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: /suggestion`)
        .setDescription(`
**Description:** 
Sends suggestion to the server staff
**Usage:**
/suggestion [text]
**Example:**
/suggestion Add Saber to the server
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

if(!args.slice(1).length) {
      return message.channel.send("Please Give the Suggestion")
    }
 
    let chx = db.get(`sugchannel_${message.guild.id}`);
 
    let ch = client.channels.cache.get(chx);
 
    const chan = message.channel;
 
    if (chx === null) {
      return message.reply('Please set the suggestion channel first')
    }
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.slice(1).join(" "))
    .setTimestamp();
 
 
     await ch.send(embed).then(m => {
      m.react("✅")
      m.react("🤷‍♂️")
      m.react("❌")
    }).catch(err => {})
 
 
 
   await chan.send("Sent Your Suggestion to " + `${chan}`).catch(err => {})
}
}

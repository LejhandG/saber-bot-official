const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
const Discord = require('discord.js')

module.exports = {
    name: "suggestion",
    timeout : 10800000,
description: "Send suggestion",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}suggestion`)
        .setDescription(`
**Description:** 
Sends suggestion to the server staff
**Usage:**
${bot.prefix}suggestion [text]
**Example:**
${bot.prefix}suggestion Add Saber to the server
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

if(!args.slice(1).length) {
      return message.channel.send(wrong)
    }
 
    let chx = db.get(`sugchannel_${message.guild.id}`);
 
    let ch = bot.channels.cache.get(chx);
 
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
 
 
 
   await chan.send("Sent Your Suggestion").catch(err => {})
}
}

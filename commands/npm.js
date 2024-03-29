const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
    name: "npm",
    timeout : 3000,
description: "NPM Packages",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}npm`)
        .setDescription(`
**Description:** 
Shows from npm packages
**Usage:**
${bot.prefix}npm [text]
**Example:**
${bot.prefix}npm discord.js
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
        
        try {
      const query = args.slice(1).join(" ")
      const data = await fetch("https://registry.npmjs.org/" + query.toLowerCase()).then(lang => lang.json()) 
      let e = new Discord.MessageEmbed()
      e.setAuthor("NPM")
      e.setTitle(data.name)
      e.addField("Description",data.description)
      e.addField("Author",data.author.name)
      e.addField("License",data.license)
      e.addField("Keywords",data.keywords.join(", "))
      e.setColor("RANDOM")
      e.setFooter(`${message.author.username}`,message.author.displayAvatarURL())
      e.setTimestamp()
      message.channel.send(e)
    } catch (error) {
      message.reply("Npm package not found")
    }
}
}

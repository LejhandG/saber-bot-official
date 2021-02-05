const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js')
const fetch = require('node-fetch');

module.exports = {
    name: "npm",
description: "NPM Packages",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: /npm`)
        .setDescription(`
**Description:** 
Shows from npm packages
**Usage:**
/npm [text]
**Example:**
/npm discord.js
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
      e.setFooter(`Requested by ${message.author.username}`,message.author.displayAvatarURL())
      e.setTimestamp()
      message.say(e)
    } catch (error) {
      message.say("Npm package not found")
    }
}
}

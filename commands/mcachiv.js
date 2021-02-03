const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "mcachiv",
description: "MC Achievement",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
  let wrong = new MessageEmbed()
        .setTitle(`Command: /mcachiv`)
        .setDescription(`
**Description:** 
Sends and image of a minecraft achivement with your text
**Usage:**
/mcachiv [text]
**Example:**
/mcachiv Nether Fortress
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

  
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);
  
  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("New Achievement!")
      .setImage("https://minecraftskinstealer.com/achievement/2/New+achievement%21/" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}

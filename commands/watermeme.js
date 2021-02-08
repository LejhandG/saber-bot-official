const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "watermeme",
    timeout : 3000,
description: "WaterMeme",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /watermeme`)
        .setDescription(`
**Description:** 
Adds text to the watermeme format
**Usage:**
/watermeme [text]
**Example:**
/watermeme Lol
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Watermeme Command")
      .setImage("https://vacefron.nl/api/water?text=" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}

const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "buzz",
description: "Buzz Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /buzz`)
        .setDescription(`
**Description:** 
Adds text to toy story meme
**Usage:**
/buzz [text]
**Example:**
/buzz Hello
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://api.memegen.link/images/buzz/" + args.slice(1, args.length + 1).join(" ") + ".png")
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed);
}
}

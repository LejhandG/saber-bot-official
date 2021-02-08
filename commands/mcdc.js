const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "mcdc",
    timeout : 3000,
description: "Minecraft Disconnect",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}mcdc`)
        .setDescription(`
**Description:** 
Sends and image of a minecraft disconnect with your text
**Usage:**
${bot.prefix}mcdc [text]
**Example:**
${bot.prefix}mcdc My wifi
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setImage("https://useless-api.vierofernando.repl.co/disconnected?text=" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occurred");
          });
}
}

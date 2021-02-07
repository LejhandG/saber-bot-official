const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "cmy",
description: "Change My Mind",
alias: ["changemymind"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}cmy`)
        .setDescription(`
**Description:** 
Change my mind meme format
**Usage:**
${bot.prefix}cmy [text]
**Example:**
${bot.prefix}cmy Lol
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);

  const helpembed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Change My Mind Command")
      .setImage("https://vacefron.nl/api/changemymind?text=" + args.slice(1, args.length + 1).join("+"))
      .setFooter(message.author.tag, message.author.avatarURL())
    message.channel.send(helpembed).catch(err => {
            message.reply("An error occured");
          });
}
}

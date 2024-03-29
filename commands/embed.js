const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "embed",
    timeout : 5000,
description: "Embeds Text",
alias: ["embeds"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}embed`)
        .setDescription(`
**Description:** 
Embeds the text given by you
**Usage:**
${bot.prefix}embed [color] [text]
**Example:**
${bot.prefix}embed #00f9ff Hello

[HEX COLOR LIST](https://www.colorhexa.com/color-names)
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

   let colour = args.slice(1).join(' ');
   if (colour.length < 1) return message.reply(wrong);

   let text = args.slice(2).join(' ');
   if (text.length < 1) return message.reply(wrong);
   if (text.length > 2000) return message.reply("Text is more than 2000 characters")

   const exampleEmbed = new Discord.MessageEmbed()
    .setColor(colour)
    .setDescription(text)
    .setFooter(message.author.tag, message.author.avatarURL())

    message.channel.send(exampleEmbed).catch(err => {
            message.reply("An error occurred");
          });
    message.delete();
}
}

const Discord = require('discord.js');

module.exports = {
    name: "embed",
description: "Embeds Text",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

   let colour = args.slice(1).join(' ');
   if (colour.length < 1) return message.reply('Write the color of the embed');

   let text = args.slice(2).join(' ');
   if (text.length < 1) return message.reply('Write some text to embed');

   const exampleEmbed = new Discord.MessageEmbed()
    .setColor(colour)
    .setDescription(text)

    message.channel.send(exampleEmbed);
}
}

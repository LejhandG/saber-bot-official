const Discord = require('discord.js');

module.exports = {
    name: "imageembed",
description: "Embeds Image",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

   let colour = args.slice(1).join(' ');
   if (colour.length < 1) return message.reply('Write the color of the embed');

   let image = args.slice(2).join(" ")
   if (!/\.(jpe?g|png|gif)$/i.test(image)) {
    return message.reply('That was not a valid URL.')
}

   const exampleEmbed = new Discord.MessageEmbed()
    .setColor(colour)
    .setImage(image)

    message.channel.send(exampleEmbed);
}
}

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "imageembed",
description: "Embeds Image",
alias: ["imgembed"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}imageembed`)
        .setDescription(`
**Description:** 
Embeds the image in your desired colors.
**Usage:**
${bot.prefix}imageembed [hex] [link]
**Example:**
${bot.prefix}imageembed #00f9ff https://cdn.discordapp.com/safasfsv.png
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to do that!");

   let colour = args.slice(1).join(' ');
   if (colour.length < 1) return message.reply(wrong);

   let image = args.slice(2).join(" ")
   if (!/\.(jpe?g|png|gif)$/i.test(image)) {
    return message.reply('That was not a valid URL.')
}

   const exampleEmbed = new Discord.MessageEmbed()
    .setColor(colour)
    .setImage(image)
    .setFooter(message.author.tag, message.author.avatarURL())

    message.channel.send(exampleEmbed).catch(err => {
            message.reply("An error occurred");
          });
    message.delete();
}
}

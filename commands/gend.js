const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "gend",
  timeout : 5000,
  description: "Ends the giveaway",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}gend`)
        .setDescription(`
**Description:** 
Ends the giveaway
**Usage:**
${bot.prefix}gend [message id]
**Example:**
${bot.prefix}gend 52511115343433
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to do that!");
  
        const ended = await bot.giveaways.endGiveaway(args[1]);
    
    if (!args[1]) return message.channel.send(wrong)
        
        if (!ended) {
            return message.channel.send('This giveaway has already ended');
        }
        else {
            message.channel.send('Ended the giveaway');
        }
  }
}

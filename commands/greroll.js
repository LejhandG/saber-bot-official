const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "greroll",
  timeout : 5000,
  description: "Rerolls the giveaway",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}greroll`)
        .setDescription(`
**Description:** 
Rerolls the giveaway
**Usage:**
${bot.prefix}greroll [message id]
**Example:**
${bot.prefix}greroll 52511115343433
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to do that!");
  
  const rerolled = await bot.giveaways.rerollGiveaway(args[1]);
  
  if (!args[1]) return message.channel.send(wrong)
        
        if (!rerolled) {
            return message.channel.send('This giveaway hasn\'t ended');
        }
        else {
            message.channel.send('Rerolled the giveaway');
        }
  }
}

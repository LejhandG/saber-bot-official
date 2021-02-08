const gifs = require('gifs-pro');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "slap",
    timeout : 3000,
description: "Random Slap GIF",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /slap`)
        .setDescription(`
**Description:** 
Slaps the mentioned user
**Usage:**
/slap @user
**Example:**
/slap @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
  let user = message.mentions.users.first()
  if (!user) return message.reply(wrong)
  
  const SlapGif = gifs.getSlapGif()
  
  let embed = new MessageEmbed()
  .setTitle(message.author.tag + " slapped " + user.tag)
  .setImage(SlapGif)
  .setColor("RANDOM")
  .setFooter(message.author.tag, message.author.avatarURL())
  message.channel.send(embed)
}
}

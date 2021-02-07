const gifs = require('gifs-pro');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "clap",
description: "Random Clap GIF",
alias: ["applaud"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}clap`)
        .setDescription(`
**Description:** 
Its claps for the mentioned user
**Usage:**
${bot.prefix}clap [user]
**Example:**
${bot.prefix}clap @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  let user = message.mentions.users.first()
  if (!user) return message.reply(wrong)
  
  const ClapGif = gifs.getClapGif()
  
  let embed = new MessageEmbed()
  .setTitle(message.author.tag + " clapped for " + user.tag)
  .setImage(ClapGif)
  .setColor("RANDOM")
  .setFooter(message.author.tag, message.author.avatarURL())
  message.channel.send(embed).catch(err => {
            message.reply("An error occured");
          });
}
}

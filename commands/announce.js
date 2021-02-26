const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "announce",
    timeout : 3000,
description: "Announcement Command",
alias: ["announcement", "ann"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to do that!");
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}announce`)
        .setDescription(`
**Description:** 
Its announces a message in a particular channel
**Usage:**
${bot.prefix}announce [channel] [message]
**Example:**
${bot.prefix}announce #general Important Announcement
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

     let channel = message.mentions.channels.first()
  if (!channel) return message.reply(wrong);

  let text = args.slice(2).join(' ');
  if (text.length < 1) return message.reply(wrong);
    
  if (text.length > 2000) return message.reply('Announcement should be less than 2000 words');
    
    const ok = new MessageEmbed()
      .setTitle(`New announcement`)
      .setDescription(text)
      .setFooter(message.author.tag, message.author.avatarURL())
      .setColor("RANDOM");
    channel.send(ok).catch(err => {
            message.reply("An error occured");
          });
    message.delete();
  },
};

  const Discord = require('discord.js');
  const client = new Discord.Client();
  const { MessageEmbed } = require('discord.js');

  module.exports = {
      name: "botnick",
  description: "Changes Nickname of the Bot",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /botnick`)
        .setDescription(`
**Description:** 
It changes the nickname of the bot.
**Usage:**
/botnick [name]
**Example:**
/botnick Saber
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    let name = args.slice(1).join(' ');
    if (name.length < 1) return message.reply(wrong);
    if (name.length > 32) return message.reply("Nickname should be less than 32 characters")

    if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('You cannot change my nickname');
      message.guild.me.setNickname(message.content.replace('/botnick ', '')).catch(err => {
            message.reply("An error occured");
          });
      message.channel.send("Nickname of the bot changed")
  }
  }

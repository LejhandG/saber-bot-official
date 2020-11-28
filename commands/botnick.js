  const Discord = require('discord.js');
  const client = new Discord.Client();

  module.exports = {
      name: "botnick",
  description: "Changes Nickname of the Bot",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    let name = args.slice(1).join(' ');
    if (name.length < 1) return message.reply('Write a name for the bot !!');

    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('You cannot change my nickname');
      message.guild.me.setNickname(message.content.replace('/botnick ', ''));
      message.channel.send("Nickname of the bot changed !!")

  }
  }
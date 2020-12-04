const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "announce",
description: "Announcement Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let testchannel = args.slice(1).join(' ');
  if (testchannel.length < 1) return message.reply('Write a name of the channel !!');

  let text = args.slice(2).join(' ');
  if (text.length < 1) return message.reply('Write the announcement !!');

  let channel = message.mentions.channels.first()
    
    const ok = new MessageEmbed()
      .setTitle(`New announcement!`)
      .setDescription(text)
      .setColor("RANDOM");
    channel.send(ok);
    message.delete();
  },
};

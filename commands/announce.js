const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "announce",
description: "Announcement Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /announce`)
        .setDescription(`
**Description:** 
Its announces a message in a particular channel
**Usage:**
/announce [channel] [message]
**Example:**
/announce #general Important Announcement
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

     let channel = message.mentions.channels.first()
  if (!channel) return message.reply(wrong);

  let text = args.slice(2).join(' ');
  if (text.length < 1) return message.reply(wrong);
    
    const ok = new MessageEmbed()
      .setTitle(`New announcement`)
      .setDescription(text)
      .setFooter(message.author.tag, message.author.avatarURL())
      .setColor("RANDOM");
    channel.send(ok, { split : true });
    message.delete();
  },
};

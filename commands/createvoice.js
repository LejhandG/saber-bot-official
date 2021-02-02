const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "createvoice",
description: "Creates voice channel",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
  let wrong = new MessageEmbed()
        .setTitle(`Command: /createvoice`)
        .setDescription(`
**Description:** 
Creates a voice channel with the name
**Usage:**
/createvoice [category id] [name]
**Example:**
/createvoice 789450070457319425 test
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
  
  let text = args.slice(2).join(' ');
  let categoryid = args[1];
  if (text.length < 1) return message.reply(wrong);
  if (categoryid.length < 1) return message.reply(wrong);
    
  message.guild.channels.create(text, { type : 'voice'}).then(channel => {
        channel.setParent(categoryid);
    })
    .catch(err => {
            message.reply("An error occured");
          });
  message.channel.send('Channel ' + text + ' created by ' + message.author.tag);  
}
}

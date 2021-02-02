const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "createcategory",
description: "Creates category channel",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
    
  let wrong = new MessageEmbed()
        .setTitle(`Command: /createcategory`)
        .setDescription(`
**Description:** 
Creates a category of the name
**Usage:**
/createcategory [name]
**Example:**
/createcategory DASHBOARD
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);
    
  message.guild.channels.create(args.slice(1, args.length + 1).join(" "), { type : 'category'}).catch(err => {
            message.reply("An error occured");
          });
  message.channel.send('Category ' + text + ' created by ' + message.author.tag);  
}
}

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "createrole",
description: "Creates a new role",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
  let wrong = new MessageEmbed()
        .setTitle(`Command: /createrole`)
        .setDescription(`
**Description:** 
Create's a role in the guild
**Usage:**
/createrole [name]
**Example:**
/createrole Moderator
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })

  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply(wrong);
  
let guild = message.member.guild; let rolename = args.slice(1).join(" ");
message.guild.roles.create({ data: { name: rolename } });
  message.channel.send("Role " + rolename + " created by " + message.author.tag);
}
}

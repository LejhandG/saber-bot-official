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
/createrole [hex] [name]
**Example:**
/createrole #00f9ff Moderator
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

  
  let text = args.slice(2).join(' ');
  if (text.length < 1) return message.reply('Write name of the role');
    
  let colour = args.slice(1).join(' ');
  if (colour.length < 1) return message.reply();
  
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
  
let guild = message.member.guild; let rolename = args.slice(1).join(" ");
message.guild.roles.create({ data: 
                            name: rolename
                            color: colour
                           });
  message.channel.send("Role " + rolename + " created by " + message.author.tag);
}
}

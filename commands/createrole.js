const Discord = require('discord.js');

module.exports = {
    name: "createrole",
description: "Creates a new role",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply('Write name of the role !!');
  
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
  
let guild = message.member.guild; let rolename = args.slice(1).join(" ");
message.guild.roles.create({ data: { name: rolename } });
  message.channel.send("Role Created !!!");
}
}
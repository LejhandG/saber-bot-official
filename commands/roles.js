const Discord = require('discord.js');

module.exports = {
    name: "roles",
description: "Shows all the server roles",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You don't have premission to do that!");
  
    ROLEZZ = message.guild.roles.cache.array() 
  
    var ROLES = "";
  
      ROLEZZ.forEach(function(element){
          ROLES += element.name + "\n"
      });
      
      message.channel.send("```" + "\n" +
                           "---------------------------------" + "\n" +
                           "ALL SERVER ROLES" + "\n" +
                           "---------------------------------" + "\n" +
                           `${ROLES}` + "```");
  
  }
}

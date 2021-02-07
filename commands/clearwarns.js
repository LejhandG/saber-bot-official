const Discord = require('discord.js');
const fs = require("fs");
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "clearwarns",
description: "Clears Warns of the user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}clearwarns`)
        .setDescription(`
**Description:** 
Clears the warnings of the mentioned user
**Usage:**
${bot.prefix}clearwarns @user
**Example:**
${bot.prefix}clearwarns @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

    if(!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send("You do not have permission to use this command")
      }
      
      const user = message.mentions.members.first()
      
      if(!user) {
      return message.channel.send(wrong)
      }
      
      if(message.mentions.users.first().bot) {
        return message.channel.send("Bot are not allowed to have warnings")
      }
      if(message.author.id === user.id) {
        return message.channel.send("You are not allowed to reset your warnings")
      }
      
      let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
      if(warnings === null) {
        return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`)
      }
      db.delete(`warnings_${message.guild.id}_${user.id}`)
      user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
      await message.channel.send(`Reseted all warnings of **${message.mentions.users.first().username}**`) //DO NOT FORGET TO USE ASYNC FUNCTION    
}
}

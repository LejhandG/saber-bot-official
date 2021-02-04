const Discord = require('discord.js');
const fs = require("fs");
const db = require('quick.db')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "warn",
description: "Warns the user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

  let wrong = new MessageEmbed()
        .setTitle(`Command: /warn`)
        .setDescription(`
**Description:** 
It warns the mentioned user
**Usage:**
/warn @user [reason]
**Example:**
/warn @Vortex No NSFW
**Subcommands**
/checkwarns @user
/clearwarns @user
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

  if(!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("You do not have the permission to use this command")
  }
  
  const user = message.mentions.members.first()
  
   if(!user) {
    return message.channel.send(wrong)
  }
  if(message.mentions.users.first().bot) {
    return message.channel.send("You can not warn bots")
  }
  if(message.author.id === user.id) {
    return message.channel.send("You can not warn yourself")
  }
  if(user.id === message.guild.owner.id) {
    return message.channel.send("You can not warn server owner")
  }
  const reason = args.slice(2).join(" ")

  if(!reason) {
      return message.channel.send(wrong)
    }
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    if(warnings === 10) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with **10 warnings**`)
    }
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)//DO NOT FORGET TO USE ASYNC FUNCTION
    }
    else if(warnings !== null) {
      db.add(`warnings_${message.guild.id}_${user.id}`, 1)
     user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
    await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`) //DO NOT FORGET TO USE ASYNC FUNCTION
  }
}
}

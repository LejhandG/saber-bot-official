const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "unmute",
    timeout : 5000,
description: "Unmutes the user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: /unmute`)
        .setDescription(`
**Description:** 
Unmutes a already muted member
**Usage:**
/unmute @user
**Example:**
/unmute @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
  if (!message.member.hasPermission("MUTE_MEMBERS")) {
    return message.reply('you do not have the required permissions to use this cmd.')
  }

    let member = message.guild.members.cache.find(r => r.name === args[0]) || message.guild.members.cache.get(args[0]) || message.mentions.members.first()

    let role = message.guild.roles.cache.find(r => r.name === "Muted")
    if (!role) return message.reply('There was not even a role by the name of muted.. try muting somebody before.')

    if (!member) return message.reply(wrong)


    if(!member.roles.cache.has(role.id)) return message.reply('the user you specified was not muted.')
        member.roles.remove(role.id)
    message.reply('unmuted ***' + member.user.tag + '***.')



}
}

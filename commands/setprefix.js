const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "setprefix",
    timeout : 30000,
description: "Sets the server prefix",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}setprefix`)
        .setDescription(`
**Description:** 
It sets the prefix for your guild
**Usage:**
${bot.prefix}setprefix [text]
**Example:**
${bot.prefix}setprefix !
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You do not have permission to use this command")
    if (!args[1]) return message.channel.send(wrong)
    if (args[1].length > 3) return message.channel.send("A prefix can only be 3 or less characters")
    if (args[1] === db.get(`guild_${message.guild.id}_prefix`)) return message.channel.send("That is already your prefix")
    if (args[1] === "/") db.delete(`guild_${message.guild.id}_prefix`)
    db.set(`guild_${message.guild.id}_prefix`, args[1])
    return message.channel.send(`I have now set your prefix to \`${args[1]}\``)
}
}

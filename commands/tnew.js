const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')
 
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "tnew",
 timeout : 10000,
description: "Creates a new ticket",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
 
 let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}tnew`)
        .setDescription(`
**Description:** 
Creates a new ticket
**Usage:**
${bot.prefix}tnew [reason]
**Example:**
${bot.prefix}tnew Want to contact staff
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let text = args.slice(1).join(' ');
   if (text.length < 1) return message.reply(wrong);

    const reason = args.slice(1).join(" ")
    ticket.makeTicket(message, reason, "swrf")
}
}

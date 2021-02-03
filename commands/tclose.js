const Discord = require('discord.js')
const client = new Discord.Client()
 
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "tclose",
description: "Closes the ticket",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
 
 let wrong = new MessageEmbed()
        .setTitle(`Command: /tclose`)
        .setDescription(`
**Description:** 
Closes the existing ticket
**Usage:**
/tclose #channel
**Example:**
/tclose #ticket-1
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
 
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let text = args.slice(1).join(' ');
   if (text.length < 1) return message.reply(wrong);

    const channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.id == args || c.name == args) || message.channel
    ticket.closeTicket(message, channel)
}
}

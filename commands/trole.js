const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')
 
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "trole",
 timeout : 3000,
description: "command description",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
 
 let wrong = new MessageEmbed()
        .setTitle(`Command: /trole`)
        .setDescription(`
**Description:** 
Set the role which can see the tickets
**Usage:**
/trole @role
**Example:**
/trole @Staff
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let text = args.slice(1).join(' ');
   if (text.length < 1) return message.reply(wrong);

    const role = message.mentions.roles.first()
 
    ticket.setRole(message, role)
}
}

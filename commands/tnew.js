const Discord = require('discord.js')
const client = new Discord.Client()
 
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "tnew",
description: "Creates a new ticket",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let text = args.slice(1).join(' ');
   if (text.length < 1) return message.reply('Write the reason of the ticket !!');

    const reason = args.slice(1).join(" ")
    ticket.makeTicket(message, reason, "swrf")
}
}

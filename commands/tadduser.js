const Discord = require('discord.js')
const client = new Discord.Client()
 
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "tadduser",
description: "Adds user to ticket",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
 
 let wrong = new MessageEmbed()
        .setTitle(`Command: /tadduser`)
        .setDescription(`
**Description:** 
Adds the user to a existing ticket
**Usage:**
/tadduser #channel @user
**Example:**
/tadduser #ticket-1 @Vortex
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let text = args.slice(1).join(' ');
   if (text.length < 1) return message.reply(wrong);

   let ok = args.slice(2).join(' ');
   if (ok.length < 1) return message.reply(wrong);

    const channel = message.mentions.channels.first()
        const user = message.mentions.users.first()
 
        ticket.ticketAddUser(channel, user)
    }
}

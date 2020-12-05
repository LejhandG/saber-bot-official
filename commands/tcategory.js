const Discord = require('discord.js')
const client = new Discord.Client()
 
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "tcategory",
description: "Sets ticket category",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let text = args.slice(1).join(' ');
   if (text.length < 1) return message.reply('Write the ID of the category !!');

    const ID = args.slice(1).join(" ")
    ticket.Category(message, ID)
 
        message.channel.send(`Ticket Category has been set!`)
}
}

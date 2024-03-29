const Discord = require('discord.js')
const client = new Discord.Client()
const { MessageEmbed } = require('discord.js')
 
const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
    name: "tcategory",
 timeout : 3000,
description: "Sets ticket category",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
 
 let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}tcategory`)
        .setDescription(`
**Description:** 
Sets the category of the ticket
**Usage:**
${bot.prefix}tcategory [category id]
**Example:**
${bot.prefix}tcategory 69814629264426
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");

    let text = args.slice(1).join(' ');
   if (text.length < 1) return message.reply(wrong);

    const ID = args.slice(1).join(" ")
    ticket.Category(message, ID)
 
        message.channel.send(`Ticket Category has been set!`)
}
}

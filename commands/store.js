const { MessageEmbed } = require("discord.js")
const db = require("quick.db")
const Discord = require("discord.js")

module.exports = {
    name: "store",
    timeout : 5000,
    description: "Shows the store",
    alias: ["shop"],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [/buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [/buy nikes]\nCar: 800 [/buy car]\nMansion: 1200 [/buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)
}
}

const dbb = require("../reconDB")
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "afk",
    timeout : 5000,
    description: "Sets your status as AFK",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        const content = args.slice(1).join(" ");
        await dbb.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`You have been set to afk\n**Reason :** ${content}`)
        .setColor("GREEN")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic : true }))
        message.channel.send(embed)
    }
  }

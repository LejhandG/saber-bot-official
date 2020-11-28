const { MessageEmbed } = require('discord.js')
const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
description: "Shows the info of the server",
alias: ["si"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(`${message.guild}'s information`)
            .addField("Owner", `The owner of this server is ${message.guild.owner}`)
            .addField("Member Count", `This server has ${message.guild.memberCount} members`)
            .addField("Emoji Count", `This server has ${message.guild.emojis.cache.size} emojis`)
            .addField("Roles Count", `This server has ${message.guild.roles.cache.size} roles`)
            .setFooter("Command used by " + message.author.tag)
            

        message.channel.send(embed)
}
}
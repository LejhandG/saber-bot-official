const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
    name: "membercount",
description: "Shows the membercount of the server",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    const embed = new MessageEmbed()
    .setTitle(`${message.guild.name}'s member statistics`)
    .setColor("RANDOM")
    .addFields({
        name: "Members: ",
        value: `${message.guild.members.cache.size}`,
        inline: true
    },
    {
        name: "Humans:",
        value: `${message.guild.members.cache.filter(m => !m.user.bot).size}`,
        inline: true
    },
    {
        name: "Bots: ",
        value: `${message.guild.members.cache.filter(m => m.user.bot).size}`,
        inline: true
    },
    {
        name: "Online: ",
        value: `${message.guild.members.cache.filter(m => m.user.presence.status == "online" || m.user.presence.status == "dnd" || m.user.presence.status == "idle").size}`,
        inline: true
    }
    )
    message.channel.send(embed)
}
}

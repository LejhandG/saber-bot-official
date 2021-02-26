const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'commandupdate',
    timeout: '1000',
    description: 'Sends update to channel in every server',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

        if(message.author.id !== '565483539500367884') return message.reply("You do not have the permission to use the command");

        bot.guilds.cache.forEach(guild => {
            const updateem = new MessageEmbed()
            .setTitle("New Update To The Bot")
            .setDescription(args.slice(1).join(" "))
            .setColor("ORANGE")
            .setTimestamp()

            guild.channels.cache.find(channel => channel.name === "saber-updates").send(updateem);
        })
    }
}

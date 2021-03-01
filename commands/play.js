const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'play',
    timeout: '5000',
    description: 'Plays music',
    alias: ["p"],
    run: async (bot, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${bot.emotes.error} - You are not in the same voice channel !`);

        if (!args[1]) return message.channel.send(`${bot.emotes.error} - Please indicate the title of a song !`);

        bot.player.play(message, args.slice(1).join(" "), { firstResult: true });
    },
};

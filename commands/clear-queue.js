const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear-queue',
    timeout: '60000',
    description: 'Clears the queue',
    alias: [],
    run: async (bot, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${bot.emotes.error} - You are not in the same voice channel !`);

        if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

        if (bot.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${bot.emotes.error} - There is only one song in the queue.`);

        bot.player.clearQueue(message);

        message.channel.send(`${bot.emotes.success} - The queue has just been **removed** !`);
    },
};

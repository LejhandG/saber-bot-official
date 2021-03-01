const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'skip',
    timeout: '10000',
    description: 'Skips the current playing song',
    alias: [],
    run: async (bot, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${bot.emotes.error} - You are not in the same voice channel !`);

        if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

        const success = bot.player.skip(message);

        if (success) message.channel.send(`${bot.emotes.success} - The current music has just been **skipped** !`);
    },
};

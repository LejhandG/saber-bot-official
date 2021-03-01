const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'shuffle',
    timeout: '7000',
    description: 'Shuffles the songs in the queue',
    alias: [],
    run: async (bot, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${bot.emotes.error} - You are not in the same voice channel !`);

        if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

        const success = bot.player.shuffle(message);

        if (success) message.channel.send(`${bot.emotes.success} - Queue shuffled **${bot.player.getQueue(message).tracks.length}** song(s) !`);
    },
};

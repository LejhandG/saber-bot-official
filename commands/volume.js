const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'volume',
    timeout: '5000',
    description: 'Adjusts the volume of the song',
    alias: ["vol"],
    run: async (bot, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${bot.emotes.error} - You are not in the same voice channel !`);

        if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No music currently playing !`);

        if (!args[1] || isNaN(args[1]) || args[1] === 'Infinity') return message.channel.send(`${bot.emotes.error} - Please enter a valid number !`);

        if (Math.round(parseInt(args[1])) < 1 || Math.round(parseInt(args[1])) > 100) return message.channel.send(`${bot.emotes.error} - Please enter a valid number (between 1 and 100) !`);

        const success = bot.player.setVolume(message, parseInt(args[1]));

        if (success) message.channel.send(`${bot.emotes.success} - Volume set to **${parseInt(args[1])}%** !`);
    }
}

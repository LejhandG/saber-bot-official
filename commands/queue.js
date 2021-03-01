const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    timeout: '5000',
    description: 'Shows the queue of the current guild',
    alias: ["q"],
    run: async (bot, message, args) => {
        if (!message.member.voice.channel) return message.channel.send(`${bot.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${bot.emotes.error} - You are not in the same voice channel !`);

        const queue = bot.player.getQueue(message);

        if (!bot.player.getQueue(message)) return message.channel.send(`${bot.emotes.error} - No songs currently playing !`);

        message.channel.send(`**Server queue - ${message.guild.name} ${bot.emotes.queue} **\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`));
    },
};

const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'wanted',
    timeout: '5000',
    description: 'Wanted Command',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

        const { Canvas } = require('canvacord')

        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'})

        const image = await Canvas.wanted(avatar);

        message.channel.send(
            new MessageAttachment(image, 'wanted.png')
        )
    }
}

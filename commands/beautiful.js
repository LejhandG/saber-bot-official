const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'beautiful',
    timeout: '5000',
    description: 'Beautiful Command',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

        const { Canvas } = require('canvacord')

        const user = message.mentions.users.first() || message.author;

        const avatar = user.displayAvatarURL({ format: 'png'})

        const image = await Canvas.beautiful(avatar);

        message.channel.send(
            new MessageAttachment(image, 'beautiful.png')
        )
    }
}

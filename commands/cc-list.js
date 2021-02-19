const schema = require('../models/custom-commands');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "cc-list",
    timeout : 10000,
    description: "Shows a list custom commands",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        const data  = await schema.find({ Guild: message.guild.id });
        if(!!data === false) return message.channel.send('There is no custom commands!');
        message.channel.send(
            new MessageEmbed()
                .setColor('BLUE')
                .setDescription(
                    data.map((command, i) => 
                        `${i + 1}: ${command.Command}`
                    ).join('\n')
                )
        )
    }
  }

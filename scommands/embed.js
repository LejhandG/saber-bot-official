const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    slash: true,
    testOnly: false,
    description: 'Sends an embed with your preferred text and color',
    minArgs: 2,
    expectedArgs: '<colour> <text>',
    callback: ({ args }) => {
        const [colour, text] = args

        const exampleEmbed = new Discord.MessageEmbed()
        .setColor(colour)
        .setDescription(text)

        return exampleEmbed
    }
}

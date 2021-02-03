const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const reactions = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹']

module.exports = {
    name: "poll",
description: "Poll Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        const [question, ...choices] = args.splice(1).join(' ').split(' | ')
        if (!question) return message.reply("You've got to create a question for you poll")
        if (!choices.length) return message.reply("Your poll has to have at least one choice !")
        if (choices.length > 20) return message.reply("Your poll can't have more than 20 choices !")
        message.delete()
        const sent = await message.channel.send(new Discord.MessageEmbed()
            .setTitle("New Poll !")
            .setThumbnail("https://cdn.discordapp.com/attachments/798507009925185556/806431127782686730/pe_logo_icon_blue-300x300.png")
            .setColor('#e6dfd1')
            .setTimestamp()
            .setDescription(`${message.author} created a poll !\n\n **${question}**\n` + choices.map((choice, i) => `${reactions[i]} ${choice}`).join('\n')))
        for (i = 0; i < choices.length; i++) await sent.react(reactions[i])
}
}

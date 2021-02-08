const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const reactions = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹']

module.exports = {
    name: "poll",
    timeout : 5000,
description: "Poll Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}poll`)
        .setDescription(`
**Description:** 
Makes a poll with question and options
**Usage:**
${bot.prefix}poll question | option1 | option2
**Example:**
${bot.prefix}poll How are you all | Fine | Sad
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have premission to do that!");
    
        const [question, ...choices] = args.splice(1).join(' ').split(' | ')
        if (!question) return message.reply(wrong)
        if (!choices.length) return message.reply(wrong)
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

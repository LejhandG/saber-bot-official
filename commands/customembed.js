const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "customembed",
    timeout : 3000,
description: "CustomEmbed Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}customembed`)
        .setDescription(`
**Description:** 
Send an embed with the avatar and name of the user of your choice
**Usage:**
${bot.prefix}customembed [name] [avatar url] [text]
**Example:**
${bot.prefix}customembed Vortex https://imgur.com/safs.png Hello Guys
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the required permission to use this command.')

if (!args[1]) return message.reply(wrong)
if (!args[2]) return message.reply(wrong)
if (!args[3]) return message.reply(wrong)

        const photo = args[2]
        const username = args[1]
        const text = args.slice(3).join(" ")

        if (!/\.(jpe?g|png|gif)$/i.test(photo)) {
    return message.reply('That was not a valid URL.')
}

const sendembed = new MessageEmbed()
.setDescription(text)
.setColor("ORANGE")

        message.channel.createWebhook(username, {
            avatar: photo
        }).then(webhook => {
            webhook.send(sendembed)
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
}
}

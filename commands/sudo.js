const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "sudo",
    timeout : 3000,
description: "Sudo Command",
alias: ["blue"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

let wrong = new MessageEmbed()
        .setTitle(`Command: /sudo`)
        .setDescription(`
**Description:** 
Send message while being someone else
**Usage:**
/sudo @user [text]
**Example:**
/sudo @Vortex Lol
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);

if (!args[1]) return message.reply(wrong)
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        if (!member) return message.reply(`Couldn't find this user!`)

        message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(args.slice(2).join(' '))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
}
}

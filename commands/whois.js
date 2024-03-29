const moment = require('moment')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "whois",
  timeout : 3000,
description: "Find the info about the mentioned user",
alias: ["userinfo"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  let user = message.mentions.users.first() || message.guild.members.cache.find(mem => mem.user.username === args[0]) || message.guild.members.cache.find(mem => mem.user.tag === args[0]) || message.guild.members.cache.get(args[0])

    if (!user) user = message.author

    let joinPos = message.guild.members.cache.array().sort((a, b) => a.joinedAt - b.joinedAt)


    let embed = new MessageEmbed()
    .setAuthor(user.tag, user.displayAvatarURL())
    .setDescription(user)
    .addField('User', [
      `**❯ Username:** ${user.username}`,
      `**❯ Discriminator:** ${user.discriminator}`,
      `**❯ ID:** ${user.id}`,
      `**❯ Avatar:** [Link to avatar](${user.displayAvatarURL({ dynamic: true })})`,
      `**❯ Time Created:** ${moment(user.createdTimestamp).format('LT')} ${moment(user.createdTimestamp).format('LL')} ${moment(user.createdTimestamp).fromNow()}`,
      `\u200b`
    ])
    .addField(`Joined`, moment(message.guild.member(user).joinedAt).format("llll"),true)
    .setThumbnail(user.displayAvatarURL())
    .addField("Join Position", joinPos.findIndex(obj => obj.user.id === user.id) === 0 ? 1 : joinPos.findIndex(obj => obj.user.id === user.id),true)
    .addField(`Roles [${message.guild.members.cache.get(user.id).roles.size}]`, message.guild.members.cache.get(user.id).roles.cache.map(r => r.toLocaleString()).join(" "))
    .setTimestamp()
    .setFooter(user.id)
    .setColor("RANDOM")

    message.channel.send(embed)
  }
}

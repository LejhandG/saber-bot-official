const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "role",
description: "Adds of removes role to the mentioned user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })

    let user = message.guild.members.cache.find(mem => mem.user.username === args[0]) || message.guild.members.cache.get(args[0]) || message.mentions.users.first()
    let role = message.guild.roles.cache.find(r => r.name === args.slice(1, args.length).join(" ")) || message.guild.roles.cache    .get(args.slice(1, args.length).join(" ")) || message.mentions.roles.first()
        if (role && user) {
        if (message.guild.member(user).roles.cache.has(role.id)) {
            message.channel.send(`-${role.toString()} from ***${user.tag === undefined ? user.user.tag : user.tag}***`)
            message.guild.member(user).roles.remove(role.id)
            return;
        }
        message.guild.member(user).roles.add(role.id)
        message.channel.send(`+${role.toString()} to ***${user.tag === undefined ? user.user.tag : user.tag}***`)
        return;
    }


    if (!role && user) {
        message.guild.roles.create({data: {
        name: args.join(" ").slice(args[0].length)}}).then(async r => {
           let m = await message.reply(`created role ${r.toString()}.`)
           setTimeout(() => {
                 m.edit(`+${r.toString()} to ***${user.tag === undefined ? user.user.tag : user.tag}***`)
                 message.guild.member(user).roles.add(r)
                        }, 2000);
        })
        return;
    }
}
}
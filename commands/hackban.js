const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "hackban",
description: "Hackban Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    let wrong = new MessageEmbed()
        .setTitle(`Command: ${bot.prefix}hackban`)
        .setDescription(`
**Description:** 
Bans the user using user id and also outside the server
**Usage:**
${bot.prefix}hackban [user id] [reason]
**Example:**
${bot.prefix}hackban 4534653541323 They were bad!
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);


    if (!message.member.hasPermission("BAN_MEMBERS")) {

        return message.channel.send("Something went wrong: No permission. (BAN_MEMBERS)");

    }



    let userID = args[1];

    let reason = args.slice(2).join(" ");



    if (!userID) return message.channel.send(wrong);

    if (isNaN(userID)) return message.channel.send("User ID must be a number.");

    if (userID === message.author.id) return message.channel.send("You can't ban yourself.");

    if (userID === bot.user.id) return message.channel.send("You can't ban me. Why?");



    if (!reason) reason = "No reason provided";



    bot.users.fetch(userID).then(async user => {

        await message.guild.members.ban(user.id, {reason: reason});

        return message.channel.send(`**${user.tag}** has been banned.`);

    }).catch(error => {

        // If the user is unavailable, return some errors. (Recommended)

        return message.channel.send(`An error occurred: **${error}**`);

    })

}
}

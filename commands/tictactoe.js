const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js");
const { tictactoe } = require("reconlx")

module.exports = {
    name: "tictactoe",
    timeout : 10000,
description: "Tictactoe Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const member = message.mentions.members.first()
    if(!member) return message.channel.send('Please specify a member')

    new tictactoe({
        player_two: member,
        message: message
    })
}
}

const Discord = require('discord.js');
const fs = require("fs");
const db = require('quick.db')

module.exports = {
    name: "checkwarns",
    timeout : 5000,
description: "Check warns of the user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    const user = message.mentions.members.first() || message.author
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)

    if(warnings === null) warnings = 0;

    message.channel.send(`He/She has **${warnings}** warning(s)`)
}
}

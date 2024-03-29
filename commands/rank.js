const Discord = require("discord.js");
const Levels = require("discord-xp");
const { MessageEmbed } = require("discord.js");
const canvacord = require("canvacord");
const db = require('quick.db');

module.exports = {
    name: "rank",
    timeout : 10000,
    description: "Sends the rank in image form",
    alias: ["level"],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        
        if(db.has(`ranktoggle-${message.guild.id}`)=== true) {
            
        const target = message.author;

        const user = await Levels.fetch(target.id, message.guild.id);

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);

        if (!user) return message.reply("You dont have any xp. Try to send some messages");

        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: 'png' }))
        .setCurrentXP(user.xp)
        .setLevel(user.level)
        .setRequiredXP(neededXp)
        .setStatus(message.member.presence.status)
        .setProgressBar('#FFA500', "COLOR")
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
    rank.build()
    .then(data => {
        const attatchment = new Discord.MessageAttachment(data, 'rank.png')
        message.channel.send("Vote Booster: Vote now for a 10% boost. https://saberofficial.ml/sabervote.html")
        message.channel.send(attatchment);
    })
        } else {
            message.channel.send("Leveling system has been disabled by the admins")
        }
    }
  }

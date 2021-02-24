const Discord = require("discord.js");
const Levels = require("discord-xp");
const { MessageEmbed } = require("discord.js");
const canvacord = require("canvacord");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MTA3OTY0Mzk4MDg5MDIyNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjA3Mjc1ODQwfQ.3jq8XhAoxzjXFDuoty8d5on2EV7jjDhAmAqLfmOeyxc', client);

module.exports = {
    name: "rank",
    timeout : 10000,
    description: "Sends the rank in image form",
    alias: ["level"],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        const target = message.author;

        const user = await Levels.fetch(target.id, message.guild.id);

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);

        if (!user) return message.reply("You dont have any xp. Try to send some messages");
        
        dbl.hasVoted(user.id).then(voted => {
    if (voted) {
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
        message.channel.send("10% rank boost is active")
        message.channel.send(attatchment);
    })
    }
    
    else {
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
    }
});
    }
    }

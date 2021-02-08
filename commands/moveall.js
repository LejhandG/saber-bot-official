const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "moveall",
    timeout : 5000,
description: "Moves everyone to the vc",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
if (!message.member.permissions.any(["ADMINISTRATOR", "MOVE_MEMBERS"])) {
        return message.reply("You do not have the valid permissions");
      }
    let channel = message.member.voice.channel;
    if (!channel) return message.channel.send("You Have To Be In A Voice Channel To Use This Command");
    if (!message.guild.me.voice.connection) {
        channel.join().then((connection) => {
            message.guild.me.voice.setSelfDeaf(true);
            const paras = new MessageEmbed()
            .setDescription('**Now, move me and I\'ll drag users to a new voice channel.**')
            .setColor('RANDOM')
            message.channel.send(paras)

            bot.on("voiceStateUpdate", async (oldmem, newmem) => {
                if (newmem.member.voice.channel && newmem.member.voice.channel.id !== channel.id) {
                    let newchannel = message.guild.channels.cache.get(newmem.member.voice.channel.id);
                    if (bot.user.id === newmem.member.user.id) {
                        channel.members.forEach(e => {
                            e.voice.setChannel(newchannel);
                            newchannel.leave();
                        })
                    }
                }
            })
        })
    }
    else {
        message.channel.send(`**I'am already Connected To A Voice Channel.**`);
    }
}
}

const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'setup',
    timeout: '60000',
    description: 'Sets up the important channels',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

        if (!message.member.permissions.any(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            return message.channel.send("You do not have the valid permissions to use the command.")
        }
        
        message.guild.channels.create('SABER BOT', {
            type: 'category',
          }).then(cat => {
            message.guild.channels.create('saber-updates', {
                type: 'text',
                parent: cat.id,
                permissionOverwrites: [
                    {
                        id: message.guild.id,
                        deny: ['SEND_MESSAGES'],
                    }]
                }).then(update => {
                    let channel = bot.channels.cache.get(update.id)
                    const updateembed = new MessageEmbed()
                    .setDescription("**All the new features/commands added or removed in the bot will be sent here. Follow the channel update channel of the support server**")
                    .setColor("ORANGE")
                    channel.send(updateembed)
                })
                message.guild.channels.create('saber-commands', {
                    type: 'text',
                    parent: cat.id,
                    }).then(cmd => {
                        let channel = bot.channels.cache.get(cmd.id)
                        const cmdembed = new MessageEmbed()
                        .setDescription("**Write `/help` to know all the commands of the bot**")
                        .setColor("ORANGE")
                        channel.send(cmdembed)
                    })
                    message.guild.channels.create('saber-logs', {
                        type: 'text',
                        parent: cat.id,
                        permissionOverwrites: [
                            {
                                id: message.guild.id,
                                deny: ['SEND_MESSAGES'],
                            }]
                        }).then(logss =>{
                            db.set(`moderation.${message.guild.id}.modlog.channel`, logss.id);
                            let channel = bot.channels.cache.get(logss.id)
                        const logsembed = new MessageEmbed()
                        .setDescription("**This channel has been set as the logs channel**")
                        .setColor("ORANGE")
                        channel.send(logsembed)
                        })
                        message.guild.channels.create('Saber VC', {
                            type: 'voice',
                            parent: cat.id,
                            })
          })
          message.channel.send("**Setup Completed**")
    }
}

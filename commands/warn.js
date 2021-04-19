const db = require('../models/warns')
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "warn",
    timeout : 5000,
    description: "Warns the user",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[1])
        if(!member) return message.channel.send('User not found.');
        if(
      message.member.roles.highest.position <=
      member.roles.highest.position
    )
      return message.reply(
        "You cant ban the member because you share the same role or your role is lower"
      );
        const reason = args.slice(2).join(" ");
        db.findOne({ guildid: message.guild.id, user: member.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : member.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        member.send(new MessageEmbed()
            .setDescription(`You have been warned for ${reason}`)
            .setColor("RED")
        )
        message.channel.send(new MessageEmbed()
            .setDescription(`Warned ${member} for ${reason}`).setColor('BLUE')
        )
    }
  }

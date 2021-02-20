const db = require('../models/warns')

module.exports = {
    name: "removewarn",
    timeout : 5000,
description: "Removes the specified number of warns of the user",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permission to use this command.')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[2]) - 1
                data.content.splice(number, 1)
                message.channel.send('Deleted the warn')
                data.save()
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
}
}

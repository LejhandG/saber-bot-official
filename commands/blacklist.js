const blacklist = require("../models/blacklist")

module.exports = {
    name: "blacklist",
    timeout : "10000",
description: "Blacklists the user from the command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if(message.author.id !== '565483539500367884') return message.channel.send('This is an owner only command.')
        const User = message.guild.members.cache.get(args[1])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                message.channel.send(`**${User.displayName}** has already been blacklisted!`)
            } else {
                data = new blacklist({ id : User.user.id })
                data.save()
                .catch(err => console.log(err))
            message.channel.send(`**${User.user.tag}** has been added to blacklist.`)
            }
           
        })
}
}

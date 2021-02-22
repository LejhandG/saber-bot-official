const blacklist = require("../models/blacklist")

module.exports = {
    name: "blacklist-remove",
    timeout : "1000",
description: "Removes the user from blacklist",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if(message.author.id !== '565483539500367884') return message.channel.send('This is an owner only command.')
        const User = message.guild.members.cache.get(args[1])
        if(!User) return message.channel.send('User is not valid.')

        blacklist.findOne({ id : User.user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
               await blacklist.findOneAndDelete({ id : User.user.id })
                .catch(err => console.log(err))
                message.channel.send(`**${User.displayName}** has been removed from blacklist.`)
            } else {
               message.channel.send(`**${User.displayName}** is not blacklisted.`)
            }
           
        })
}
}

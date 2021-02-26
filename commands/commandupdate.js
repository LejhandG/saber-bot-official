const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'commandupdate',
    timeout: '1000',
    description: 'Sends update to channel in every server',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

        if(message.author.id !== '565483539500367884') return message.reply("You do not have the permission to use the command");
        
        const hook = new Discord.WebhookClient('814851292471361557', 'q0eVEnHxCo_PknKnYqVNyMXxzlfIDaVYqavyXrfHbJqez6VRTWiW0NdNjygm_lFC3YrP');

        bot.guilds.cache.forEach(guild => {
            const updateem = new MessageEmbed()
            .setTitle("New Update To The Bot")
            .setDescription(args.slice(1).join(" "))
            .setColor("ORANGE")
            .setTimestamp()
            
            hook.send(updateem)
        })
    }
}

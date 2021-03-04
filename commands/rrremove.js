const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { ReactionRoleManager } = require('discord.js-collector');

module.exports = {
    name: 'rrremove',
    timeout: '10000',
    description: 'Removes reaction role to the message id',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the required permission to use this command.')

    const reactionRoleManager = new ReactionRoleManager(bot, {
    storage: false,
    path: __dirname + '/roles.json',
    mongoDbLink: 'mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test'
});
      const emoji = args[1];
        if (!emoji)
            return message.reply('You need use a valid emoji.').then(m => m.delete({ timeout: 1000 }));

        const msg = await message.channel.messages.fetch(args[2]);
        if (!msg)
            return message.reply('Message not found!').then(m => m.delete({ timeout: 1000 }));

        await reactionRoleManager.deleteReactionRole({message: msg, emoji});
    }
    }

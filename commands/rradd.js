const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { ReactionRoleManager } = require('discord.js-collector');

module.exports = {
    name: 'rradd',
    timeout: '10000',
    description: 'Adds reaction role to the message id',
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the required permission to use this command.')
      
    const reactionRoleManager = new ReactionRoleManager(bot, {
    storage: false,
    path: __dirname + '/roles.json',
    mongoDbLink: 'mongodb+srv://Lejhand:united60@saberofficial.ta9ju.mongodb.net/test'
});
      
      const role = message.mentions.roles.first();
        if (!role)
            return message.reply('You need mention a role').then(m => m.delete({ timeout: 1000 }));

        const emoji = args[2];
        if (!emoji)
            return message.reply('You need use a valid emoji.').then(m => m.delete({ timeout: 1000 }));

        const msg = await message.channel.messages.fetch(args[3] || message.id);
        if (!role)
            return message.reply('Message not found!').then(m => m.delete({ timeout: 1000 }));

        reactionRoleManager.createReactionRole({
            message: msg,
            roles: [role],
            emoji,
            type:1
        });
        message.reply('Done').then(m => m.delete({ timeout: 500 }));
    }
}

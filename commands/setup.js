module.exports = {
    name: "setup",
description: "Makes a channel for bot cmds",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
    message.guild.channels.create('SABER MUSIC', { type : 'category'});
    message.guild.channels.create('saber-commands', { type : 'text'});
    message.guild.channels.create('saber-music', { type : 'voice'});
    message.channel.send('Setup completed !!!. Write /setupembed in the created channel !!');  
}
}
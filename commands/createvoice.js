module.exports = {
    name: "createvoice",
description: "Creates voice channel",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply('Write name of the voice channel !!');
  
if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
    
  message.guild.channels.create(args.slice(1, args.length + 1).join(" "), { type : 'voice'});
  message.channel.send('Channel Created !!!');  
}
}
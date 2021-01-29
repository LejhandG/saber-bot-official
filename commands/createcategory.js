module.exports = {
    name: "createcategory",
description: "Creates category channel",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You do not have the required permission to use this command.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
  
  let text = args.slice(1).join(' ');
  if (text.length < 1) return message.reply('Write the category name');
    
  message.guild.channels.create(args.slice(1, args.length + 1).join(" "), { type : 'category'});
  message.channel.send('Category ' + text + ' created by ' + message.author.tag);  
}
}

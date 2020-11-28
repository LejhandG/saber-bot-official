module.exports = {
    name: "slowmode",
description: "Sets the channel slowmode",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You don't have premission to do that!");
  
    let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Please specify the time !!');
  
  var time = message.content.split(' ').slice(1).join(' ')
  if(!time) return message.reply('Please enter time in seconds !!')
  message.channel.setRateLimitPerUser(time)
  message.channel.send('Set the slowmode !!')
}
}
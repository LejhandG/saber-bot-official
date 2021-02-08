module.exports = {
  name: "say",
  timeout : 3000,
  description: "Say Command",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to do that!");
    
      let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('You did not specify your message to send !!');
    
    message.channel.send(args.slice(1, args.length + 1).join(" "))
    message.delete()
  }
}

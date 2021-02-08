module.exports = {
    name: "servers",
    timeout : 3000,
description: "List of Servers",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play, client) => {
  if(message.author.id !== '565483539500367884') return message.reply("You do not have the permission to use the command !");
    bot.guilds.cache.forEach(guild => {
  message.channel.send(`${guild.name} | ${guild.id} | ${guild.memberCount}`);
})
}
}

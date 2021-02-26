const db = require('quick.db')

module.exports = {
  name: "rank-toggle",
  timeout : 10000,
  description: "Turns off or on the rank system",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if(args[1] === 'on') {
      await db.set(`ranktoggle-${message.guild.id}`, true)
      message.channel.send("Turned on leveling feature")
    } else if(args[1] === 'off') {
      await db.delete(`ranktoggle-${message.guild.id}`)
      message.channel.send("Turned off leveling feature")
    }
  }
}

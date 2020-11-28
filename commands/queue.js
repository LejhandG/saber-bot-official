const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "queue",
  description: "Show song queue",
  alias: ["q"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (!serverQueue)
      return message.channel.send({
        embed: { color: "GOLD", description: "<:S_Cross:773832506326646797> There is nothing playing" }
      });
    let embedQueue = new MessageEmbed()
      .setColor("GOLD")
      .setAuthor("Song queue", message.author.displayAvatarURL())
      .setDescription(
        `${serverQueue.songs.map(song => `**-** ${song.title}`).join("\n")}`
      )
      .setFooter(`• Now Playing: ${serverQueue.songs[0].title}`);
    return message.channel.send(embedQueue);
  }
}
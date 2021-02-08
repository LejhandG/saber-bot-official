module.exports = {
  name: "nowplaying",
  timeout : 3000,
  description: "Show bot currently playing song",
  alias: ["np"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (!serverQueue)
      return message.channel.send({
        embed: { color: "GOLD", description: "<:S_Cross:773832506326646797> There is nothing playing" }
      });
    return message.channel.send({
      embed: {
        color: "GOLD",
        description: `▶️ **|**  Now Playing: **\`${serverQueue.songs[0].title}\`**`
      }
    });
  }
}

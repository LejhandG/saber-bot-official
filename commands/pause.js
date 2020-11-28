module.exports = {
  name: "pause",
  description: "Pause song",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: "<:S_Pause:773837598597971968> **|**  Paused the music for you"
        }
      });
    }
    return message.channel.send({
      embed: { color: "GOLD", description: "<:S_Cross:773832506326646797> There is nothing playing" }
    });
  }
}
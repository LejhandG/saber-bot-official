module.exports = {
  name: "resume",
  dscription: "Resume song",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: "<:S_Play:773829052015968316> **|**  Resumed the music for you"
        }
      });
    }
    return message.channel.send({
      embed: { color: "GOLD", description: "<:S_Cross:773832506326646797> There is nothing playing" }
    });
  }
}
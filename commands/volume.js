module.exports = {
  name: "volume",
  description: "Set the bot song volume",
  alias: ["vol", "volume"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description:
            "<:S_Cross:773832506326646797> I'm sorry, but you need to be in a voice channel to set a volume!"
        }
      });
    if (!serverQueue)
      return message.channel.send({
        embed: { color: "GOLD", description: "<:S_Cross:773832506326646797> There is nothing playing" }
      });
    if (!args[1])
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: `The current volume is: **\`${serverQueue.volume}%\`**`
        }
      });
    if (isNaN(args[1]) || args[1] > 100)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description:
            "<:S_Volume:773838825830613002> Volume only can be set in a range of **`1`** - **`100`**"
        }
      });
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolume(args[1] / 100);
    return message.channel.send({
      embed: {
        color: "GOLD",
        description: `🎵 I set the volume to: **\`${args[1]}%\`**`
      }
    });
  }
}

module.exports = {
  name: "stop",
  timeout : 3000,
  description: "Stop bot playing song",
  alias: ["dc", "leave"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    message.react('👋');
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description:
            "<:S_Cross:773832506326646797> I'm sorry but you need to be in a voice channel to play music!"
        }
      });
    if (!serverQueue)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: "<:S_Cross:773832506326646797> There is nothing playing that I could stop for you"
        }
      });
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end(
      "[runCmd] Stop command has been used"
    );
    return message.channel.send({
      embed: {
        color: "GOLD",
        description: "<:S_Stop:773836237797589034> **|**  Deleting queues and leaving voice channel..."
      }
    });
  }
}

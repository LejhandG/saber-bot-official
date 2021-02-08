const { Client, Util, MessageEmbed } = require("discord.js");

module.exports = {
  name: "skip",
  timeout : 3000,
  description: "Skip song",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (!message.member.voice.channel)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description:
            "<:S_Cross:773832506326646797> I'm sorry, but you need to be in a voice channel to skip a music!"
        }
      });
    if (!serverQueue)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: "<:S_Cross:773832506326646797> There is nothing playing that I could skip for you"
        }
      });
    serverQueue.connection.dispatcher.end(
      "[runCmd] Skip command has been used"
    );
    return message.channel.send({
      embed: {
        color: "GOLD",
        description: "<:S_Skip:773834982287343656> **|**  I skipped the song for you"
      }
    });
  }
}

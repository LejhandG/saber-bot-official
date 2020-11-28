module.exports = {
  name: "ping",
  description: "Show bot's ping",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.send(
      "🏓Pong!! Ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`"
    );
  }
}
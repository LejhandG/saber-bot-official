module.exports = {
  name: "loop",
  description: "Loop song",
  alias: ["lp"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (serverQueue) {
      serverQueue.loop = !serverQueue.loop;
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: `🔁  **|**  Loop is **\`${
            serverQueue.loop === true ? "enabled" : "disabled"
          }\`**`
        }
      });
    }
    return message.channel.send({
      embed: { color: "GOLD", description: "<:S_Cross:773832506326646797> There is nothing playing" }
    });
  }
}
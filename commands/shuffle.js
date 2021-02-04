const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "shuffle",
  description: "Shuffles the music",
  alias: [],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  const Channel = message.member.voice.channel;

    if (!Channel) return message.channel.send("JOIN TO A VOICE CHANNEL");

    const Queue = await client.queue.get(message.guild.id);

    if (!Queue)
      return message.channel.send(
        "Nothing Is Playing In This Server"
      );
    
    const Current = await Queue.Songs.shift();
    
    Queue.Songs = Queue.Songs.sort(() => Math.random() - 0.5);
    await Queue.Songs.unshift(Current);
    
    const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Success")
    .setDescription("🎶 Queue Has Been Shuffled")
    .setTimestamp();
    
    return message.channel.send(Embed).catch(() => message.channel.send("🎶 Queue Has Been Shuffled"));
  }
}

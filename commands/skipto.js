module.exports = {
    name: "skipto",
    timeout : 3000,
description: "Skips to a particular song",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (!args[1])
    return message.channel.send("**Please Enter A Song Number!**");

  const { channel } = message.member.voice;
  if (!channel) return message.channel.send("JOIN VOICE CHANNEL!");
  if (!serverQueue) {
    message.channel.send("Nothing playing in this server");
  }

  if (message.guild.me.voice.channel !== message.member.voice.channel) {
    return message.channel.send(
      "You Have To Be In The Same Channel With The Bot!"
    );
  }

  if (args[1] < 1 && args[1] >= serverQueue.songs.length) {
    return message.channel.send("**Please Enter A Valid Song Number!**");
  }
  try {
    serverQueue.songs.splice(1, args[1] - 2);
    serverQueue.connection.dispatcher.end();
    return;
  } catch {
    serverQueue.connection.dispatcher.end();
    await channel.leave();
    return message.channel.send("PLEASE TRY AGAIN");
  }
}
}

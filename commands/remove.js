module.exports = {
    name: "remove",
    timeout : 3000,
description: "Removes a song from the queue",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    if (!args[1]) return message.channel.send("**Please Enter A Song Number!**")

    const { channel } = message.member.voice;
    if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to remove a particular song number!');
    if (message.guild.me.voice.channel !== message.member.voice.channel) {
        return message.channel.send("**You Have To Be In The Same Channel With The Bot!**");
    };
    if (!serverQueue) return message.channel.send("Nothing playing in this server");
  try {
    if (args[1] < 1 && args[1] >= serverQueue.songs.length) {
        return message.channel.send("Please Enter A Valid Song Number!");
    }
    serverQueue.songs.splice(args[1] - 1, 1);
    return message.channel.send(`Removed song number ${args[1]} from queue`);
  } catch {
      serverQueue.connection.dispatcher.end();
      return message.channel.send("TRY AGAIN!")
  }
}
}

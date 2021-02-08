const { Client, Util, MessageEmbed } = require("discord.js");


module.exports = {
  name: "play",
  timeout : 3000,
  description: "Play song",
  alias: ["p"],
  run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description:
            "<:S_Cross:773832506326646797> I'm sorry, but you need to be in a voice channel to play a music! <:S_Cross:773832506326646797>"
        }
      });
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT")) {
      return message.channel.send({
        embed: {
          color: "GOLD",
          description:
            "<:S_Connect:773829048928960525> Sorry, but I need a **`CONNECT`** permission to proceed! <:S_Connect:773829048928960525>"
        }
      });
    }
    if (!permissions.has("SPEAK")) {
      return message.channel.send({
        embed: {
          color: "GOLD",
          description:
            "<:S_Speak:773829049289932830> Sorry, but I need a **`SPEAK`** permission to proceed! <:S_Speak:773829049289932830>"
        }
      });
    }
    if (!url || !searchString)
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: "<:S_Cross:773832506326646797> Please input link/title to play music"
        }
      });
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
        await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
      }
      return message.channel.send({
        embed: {
          color: "GOLD",
          description: `✅ **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
        }
      });
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          var video = await youtube.getVideoByID(videos[0].id);
          if (!video)
            return message.channel.send({
              embed: {
                color: "GOLD",
                description: "<:S_Cross:773832506326646797> **|**  I could not obtain any search results"
              }
            });
        } catch (err) {
          console.error(err);
          return message.channel.send({
            embed: {
              color: "GOLD",
              description: "<:S_Cross:773832506326646797> **|**  I could not obtain any search results"
            }
          });
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
  }
}

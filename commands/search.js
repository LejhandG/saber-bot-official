const { Client, Util, MessageEmbed } = require("discord.js");

module.exports = {
  name: "search",
  timeout : 3000,
  description: "Search and add song to queue",
  alias: ["sc"],
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
          description:
            "<:S_Cross:773832506326646797> Please input link/title to search music"
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
          let index = 0;
          let embedPlay = new MessageEmbed()
            .setColor("GOLD")
            .setAuthor("Search results", message.author.displayAvatarURL())
            .setDescription(
              `${videos
                .map(video2 => `**\`${++index}\`  |**  ${video2.title}`)
                .join("\n")}`
            )
            .setFooter(
              "✅ Please choose one of the following 10 results, this embed will auto-deleted in 15 seconds"
            );
          // eslint-disable-next-line max-depth
          message.channel.send(embedPlay).then(m =>
            m.delete({
              timeout: 15000
            })
          );
          try {
            var response = await message.channel.awaitMessages(
              message2 => message2.content > 0 && message2.content < 11,
              {
                max: 1,
                time: 15000,
                errors: ["time"]
              }
            );
          } catch (err) {
            console.error(err);
            return message.channel.send({
              embed: {
                color: "GOLD",
                description:
                  "<:S_Cross:773832506326646797> The song selection time has expired in 15 seconds, the request has been canceled."
              }
            });
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
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
      response.delete();
      return handleVideo(video, message, voiceChannel);
    }
  }
}

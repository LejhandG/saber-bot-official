const solenolyrics= require("solenolyrics"); 

module.exports = {
    name: "lyrics",
description: "Shows the lyrics of the song",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  let name = args.slice(1).join(' ');
  if (name.length < 1) return message.reply('Write the name of the song');
  
  var lyrics = await solenolyrics.requestLyricsFor(args.slice(1, args.length + 1).join(" "));
  message.channel.send(lyrics, { split: true }).catch(err => {
            message.reply("Not able to find the song");
          });
}
}

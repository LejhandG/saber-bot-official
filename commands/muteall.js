module.exports = {
    name: "muteall",
description: "Mutes all in VC",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You don't have premission to do that!");
  
  if (message.member.voice.channel) {
  let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
  for (const [memberID, member] of channel.members) {
    // I added the following if statement to mute everyone but the invoker:
    // if (member != message.member)

    // This single line however, nested inside the for loop, should mute everyone in the channel:
    member.voice.setMute(true);
    message.reply('All users in the voice channel are muted!!')
  }
} else {
  message.reply('You need to join a voice channel first!');
}
}
}
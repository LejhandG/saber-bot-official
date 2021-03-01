module.exports = (bot, message, track) => {
    message.channel.send(`${bot.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`);
};
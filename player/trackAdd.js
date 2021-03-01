module.exports = (bot, message, queue, track) => {
    message.channel.send(`${bot.emotes.music} - ${track.title} has been added to the queue !`);
};
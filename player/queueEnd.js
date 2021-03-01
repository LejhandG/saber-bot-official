module.exports = (bot, message, queue) => {
    message.channel.send(`${bot.emotes.error} - Music stopped as there is no more music in the queue !`);
};
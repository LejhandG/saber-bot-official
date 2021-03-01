module.exports = (bot, message, query) => {
    message.channel.send(`${bot.emotes.error} - No results found on YouTube for ${query} !`);
};
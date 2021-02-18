const { fetchTranscript } = require("reconlx")
const { MessageAttachment } = require("discord.js")

module.exports = {
    name: "transcript",
    timeout : 10000,
    description: "Downloads the transcript of the ticket",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have the permissions required")

        fetchTranscript(message, 10)
        .then((data) => {
            const file = new MessageAttachment(data, 'index.html')
            message.channel.send(file)
        })
    }
}

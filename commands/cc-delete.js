const schema = require('../models/custom-commands');

module.exports = {
    name: "cc-delete",
    timeout : 10000,
    description: "Deletes a custom command",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permissions to use this command")

        const name = args[1];

        if(!name) return message.channel.send("Please specify a command name");

        const data = await schema.findOne({ Guild: message.guild.id, Command: name});

        if(!data) return message.channel.send("That custom command does not exist!");
        await schema.findOneAndDelete({ Guild: message.guild.id, Command: name});
        message.channel.send(`Remove **${name}** from custom commands`);
    }
  }

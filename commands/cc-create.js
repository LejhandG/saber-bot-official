const schema = require('../models/custom-commands');

module.exports = {
    name: "cc-create",
    timeout : 10000,
    description: "Creates a custom command",
    alias: [],
    run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permissions to use this command")

        const name = args[1]; const response = args.slice(2).join(" ");

        if(!name) return message.channel.send("Please specify a command name");
        if(!response) return message.channel.send("Please specify a response")

        const data = await schema.findOne({ Guild: message.guild.id, Command: name});
        if(data) return message.channel.send('This custom command exists already!');
        const newData = new schema({
            Guild: message.guild.id,
            Command: name,
            Response: response
        })
        await newData.save();
        message.channel.send(`Saved **${name}** as a custom command`);
    }
  }

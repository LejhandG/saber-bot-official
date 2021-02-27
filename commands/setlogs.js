const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "setlogs",
    timeout : 30000,
description: "Sets logs of the server",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play, client) => {
    if (!message.member.permissions.any(["MANAGE_GUILD", "ADMINISTRATOR"])) {
        return message.channel.send("You do not have the valid permissions to use the command.")
    }

    let toggling = ["disable", "enable"];
    if (!toggling.includes(args[1])) {
        return message.channel.send("Please provide a valid options. Either **disable** or **enable** it.");
    }

    if (args[1] === "enable") {
        let channel = message.mentions.channels.first();
        let webhookid;
        let webhooktoken;
        if (!channel) return message.channel.send("Please provide the channel that you want to make it as a mod log.");

        await db.set(`moderation.${message.guild.id}.modlog.toggle`, true);

        channel.createWebhook("Saber Logs", {
            avatar: "https://cdn.discordapp.com/avatars/751079643980890225/64b5f19cb49b07dbfa1064255919c6d9.png"
        }).then(webhook =>{
        webhookid = webhook.id;
        webhooktoken = webhook.token;

        db.set(`moderation.${message.guild.id}.modlog.id`, webhookid)
        db.set(`moderation.${message.guild.id}.modlog.token`, webhooktoken)
        })

        return message.channel.send(`The mod log has been enabled for <#${channel.id}>`);
    }

    if (args[1] === "disable") {
        let toggle = db.get(`moderation.${message.guild.id}.modlog.toggle`);
        if (!toggle || toggle == false) return message.channel.send("The mod log has already been disabled before.")
        db.set(`moderation.${message.guild.id}.modlog.toggle`, false)

        db.delete(`moderation.${message.guild.id}.modlog.id`, webhookid)
        db.delete(`moderation.${message.guild.id}.modlog.token`, webhooktoken)

        return message.channel.send("The mod log has been disabled")
    }
}
}

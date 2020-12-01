module.exports = {
    name: "hackban",
description: "Hackban Command",
alias: [],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {

    if (!message.member.hasPermission("BAN_MEMBERS")) {

        return message.channel.send("Something went wrong: No permission. (BAN_MEMBERS)");

    }



    let userID = args[1];

    let reason = args.slice(2).join(" ");



    if (!userID) return message.channel.send("Please insert a valid user ID.");

    if (isNaN(userID)) return message.channel.send("User ID must be a number.");

    if (userID === message.author.id) return message.channel.send("You can't ban yourself.");

    if (userID === bot.user.id) return message.channel.send("You can't ban me. Why?");



    if (!reason) reason = "No reason provided";



    bot.users.fetch(userID).then(async user => {

        await message.guild.members.ban(user.id, {reason: reason});

        return message.channel.send(`**${user.tag}** has been banned, from outside this server.`);

    }).catch(error => {

        // If the user is unavailable, return some errors. (Recommended)

        return message.channel.send(`An error occurred: **${error}**`);

    })

}
}

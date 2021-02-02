module.exports = {
    name: "invites",
description: "Check the invites",
alias: ["checkinvites"],
run: async (bot, message, args, url, searchString, youtube, handleVideo, serverQueue, play) => {
  
  let user = message.mentions.users.first()
  if (!user) user = message.author

        message.guild.fetchInvites()
        .then

        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
            let lol = new MessageEmbed()
        .setDescription(`
You have **${userInviteCount} invites**.
`)
        .setFooter(message.author.tag, message.author.avatarURL())
        .setColor(`RANDOM`);
            
                     message.channel.send(lol);
            }
        )
    }
};

const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'stickbug',
    timeout: '5000',
    description: 'Stickbug Command',
    alias: [],
    run: async (bot, message, args) => {
      
      let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({
            format: 'png',
            dynamic: false,
            size: 1024
        })

                        try {
                    const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=stickbug&url=${avatar}`));
                    const vid = (await res.json()).message;

                    const attachment = new MessageAttachment(vid, `${user.tag}-stickbug.mp4`);
                    message.channel.send(attachment);
                } catch (err) {
                    console.log(err)
                }
    }
}

const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'threats',
    timeout: '5000',
    description: 'Threats Command',
    alias: [],
    run: async (bot, message, args) => {

      let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({
            format: 'png',
            dynamic: false,
            size: 1024
        })

                        try {
                    const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=threats&url=${avatar}`));
                    const vid = (await res.json()).message;

                    const attachment = new MessageAttachment(vid, `${user.tag}-threats.png`);
                    message.channel.send(attachment);
                } catch (err) {
                    console.log(err)
                }
    }
}

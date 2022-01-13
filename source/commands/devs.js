const { Client, Message, Guild } = require("discord.js");


module.exports = {
    name: "devs",
    aliases: ["dev"],

    /**
     * 
     * @param {Client} client
     * @param {Message} message
     * @param {Guild} guild
     */

    run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
        let embed = new MessageEmbed()
            .setAuthor('DEV !            𝐇𝐋𝐘 7𝐎𝐃𝐀#1131')
            .setColor('DARK_GOLD')
            .addFields({
                name: "Developer",
                value: "@!            𝐇𝐋𝐘 7𝐎𝐃𝐀#1131",
                inline: true
            }, {
                name: "server",
                value: '[Here](https://discord.gg/Qn3z4eyZzW)',
                inline: true
            }, {
                name: "owner id",
                value: "778881852462596107",
                inline: true
            })
            .setImage("https://cdn.discordapp.com/attachments/929676460485136435/931332183581413397/f8bb1b22c689b3d7dee7931436bb5e70.png");
        message.reply({ embeds: [embed], allowedMentions: false })
    }
};

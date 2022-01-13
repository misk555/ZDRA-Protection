const { Client, Message, Guild, MessageButton, MessageActionRow } = require("discord.js");


module.exports = {
        name: "maxprotect",
        aliases: [""],

        /**
         * 
         * @param {Client} client
         * @param {Message} message
         * @param {Guild} guild
         */

        run: async(client, message, args, prefix, lang, admins, db, MessageEmbed) => {
            const embed = new MessageEmbed()
            .setTitle(`Help Commands`)
            .setColor(0x2f3136)
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(`**[ZDRA Protection](https://github.com/DevelopersSupportAR/ZDRA-Protection.git), Protect your discord server from hackers and bad staff!!.**\n\n\nPress "❌" To Stop The Bot Protection\nPress "🔓" To Use All Bot Protection\nPress "🔒" To Allow NIRO Protection (your staff will can't use an permission thay have)\n`)
        let btn = new MessageButton()
            .setCustomId('x')
            .setStyle("DANGER")
            .setLabel('❌ No Protection');
        let btn2 = new MessageButton()
            .setCustomId('full')
            .setStyle("DANGER")
            .setLabel('🔓 Full Protection');
        let btn3 = new MessageButton()
            .setCustomId('7oda')
            .setStyle("DANGER")
            .setLabel('🔒 7oda Protection');
        let row = new MessageActionRow()
            .addComponents(btn, btn2, btn3);
        var m = await message.reply({ embeds: [embed], components: [row], ephemeral: true })
        const filter = i => i.user.id === message.author.id;
        const collector = m.createMessageComponentCollector({ filter, time: 1000 * 60 * 3 });

        collector.on('collect', (i) => {
            i.deferReply();
            if (i.customId == "x") {
                db.delete(`AntiLinksArray_${message.guild.id}`);
                db.delete(`AntiSwearArray_${message.guild.id}`);
                db.delete(`AntiLinks_${message.guild.id}`);
                db.delete(`AntiSwear_${message.guild.id}`);
                db.delete(`AntiBots_${message.guild.id}`);
                db.delete(`AntiSpam_${message.guild.id}`);
                db.delete(`AntiTokens_${message.guild.id}`);
                db.delete(`AntiTokensTime_${message.guild.id}`);
                db.delete(`RoleCreateToggle_${message.guild.id}`);
                db.delete(`RoleCreate_${message.guild.id}`);
                db.delete(`RoleDeleteToggle_${message.guild.id}`);
                db.delete(`RoleDelete_${message.guild.id}`);
                db.delete(`ChannelCreateToggle_${message.guild.id}`);
                db.delete(`ChannelCreate_${message.guild.id}`);
                db.delete(`ChannelDeleteToggle_${message.guild.id}`);
                db.delete(`ChannelDelete_${message.guild.id}`);
                db.delete(`MembersBanToggle_${message.guild.id}`);
                db.delete(`MemebersBan_${message.guild.id}`);
                m.edit({ content: "> ❌ **All Bot Protection Settings Is Off**", embeds: [], components: [], ephemeral: true })
            } else if (i.customId == "full") {
                db.set(`AntiLinksArray_${message.guild.id}`, { data: ['https', 'http', 'www', 'discord.gg'] });
                db.set(`AntiSwearArray_${message.guild.id}`, { data: ['fuck', 'pussy', 'نيك', 'كس','كسمك','خول','عرص','منيوك','متناك','خُل','كسختك','كسمين امك','احا','احتين','خخخخخخخخ'] });
                db.set(`AntiLinks_${message.guild.id}`, "on");
                db.set(`AntiSwear_${message.guild.id}`, "on");
                db.set(`AntiBots_${message.guild.id}`, "on");
                db.set(`AntiSpam_${message.guild.id}`, "on");
                db.set(`AntiTokens_${message.guild.id}`, "on");
                db.set(`AntiTokensTime_${message.guild.id}`, 120);
                db.set(`RoleCreateToggle_${message.guild.id}`, 'on');
                db.set(`RoleCreate_${message.guild.id}`, "1");
                db.set(`RoleDeleteToggle_${message.guild.id}`, "on");
                db.set(`RoleDelete_${message.guild.id}`, "1");
                db.set(`ChannelCreateToggle_${message.guild.id}`, "on");
                db.set(`ChannelCreate_${message.guild.id}`, "1");
                db.set(`ChannelDeleteToggle_${message.guild.id}`, "on");
                db.set(`ChannelDelete_${message.guild.id}`, "1");
                db.set(`MembersBanToggle_${message.guild.id}`, "on");
                db.set(`MemebersBan_${message.guild.id}`, "1");
                m.edit({ content: "> 🔓 **All Bot Protection Settings Is On**", embeds: [], components: [], ephemeral: true })
            } else if (i.customId == "niro") {
                db.set(`AntiLinksArray_${message.guild.id}`, { data: ['https', 'http', 'www', 'discord.gg'] });
                db.set(`AntiSwearArray_${message.guild.id}`, { data: ['fuck', 'pussy', 'نيك', 'كس'] });
                db.set(`AntiLinks_${message.guild.id}`, "on");
                db.set(`AntiSwear_${message.guild.id}`, "on");
                db.set(`AntiBots_${message.guild.id}`, "on");
                db.set(`AntiSpam_${message.guild.id}`, "on");
                db.set(`AntiTokens_${message.guild.id}`, "on");
                db.set(`AntiTokensTime_${message.guild.id}`, 120);
                db.set(`RoleCreateToggle_${message.guild.id}`, 'on');
                db.set(`RoleCreate_${message.guild.id}`, "1");
                db.set(`RoleDeleteToggle_${message.guild.id}`, "on");
                db.set(`RoleDelete_${message.guild.id}`, "1");
                db.set(`ChannelCreateToggle_${message.guild.id}`, "on");
                db.set(`ChannelCreate_${message.guild.id}`, "1");
                db.set(`ChannelDeleteToggle_${message.guild.id}`, "on");
                db.set(`ChannelDelete_${message.guild.id}`, "1");
                db.set(`MembersBanToggle_${message.guild.id}`, "on");
                db.set(`MemebersBan_${message.guild.id}`, "1");
                // niro
                db.set(`!      7𝐎𝐃𝐀#1131_Protection_${message.guild.id}`, "on");
                m.edit({ content: "> 🔒 **!      7𝐎𝐃𝐀#1131 Protection is active**", embeds: [], components: [], ephemeral: true })
            }
        });
    }
};

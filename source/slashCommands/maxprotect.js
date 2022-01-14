const {
  Client,
  CommandInteraction,
  MessageEmbed,
  MessageButton,
  MessageActionRow,
} = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "maxprotect",
  description: "Enable All Bot Protection!.",
  type: "CHAT_INPUT",

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    try {
      const embed = new MessageEmbed()
        .setTitle(`Help Commands`)
        .setColor(0x2f3136)
        .setAuthor(interaction.guild.name, interaction.guild.iconURL())
        .setDescription(
          `7ODA's PROTECTION`
        );
      let btn = new MessageButton()
        .setCustomId("x")
        .setStyle("DANGER")
        .setLabel("❌ No Protection");
      let btn2 = new MessageButton()
        .setCustomId("full")
        .setStyle("DANGER")
        .setLabel("🔓 Full Protection");
      let btn3 = new MessageButton()
        .setCustomId("7ODA")
        .setStyle("DANGER")
        .setLabel("🔒 7ODA Protection");
      let row = new MessageActionRow().addComponents(btn, btn2, btn3);
      interaction
        .reply({
          embeds: [embed],
          components: [row],
          ephemeral: true,
        })
        .catch(() => {});
    } catch (err) {
      console.log(err);
    }
  },
};

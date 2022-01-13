const { Role, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db");

/**
 *
 * @param {Client} client
 * @param {Role} role
 */

module.exports = async (client, role) => {
  try {
    let niro = db.fetch(`7ODA_Protection_${role.guild.id}`);
    if (niro == "on") {
      const entry = await role.guild
        .fetchAuditLogs({
          type: "ROLE_CREATE",
        })
        .then((audit) => audit.entries.first());
      let author = entry.executor;
      let member = role.guild.members.cache.get(author.id);
      if (member)
        member
          .ban({ reason: "Hacker!!. (Catched By 7ODA Protection)" })
          .catch((err) => {
            return;
          });
    }
    require("../functions/roleCreateFunction")
      .get(role, db)
      .catch(() => {});
    let channelData = role.guild.channels.cache.get(
      db.fetch(`Logs_${role.guild.id}`)
    );
    if (channelData) {
      const entry = await role.guild
        .fetchAuditLogs({
          type: "ROLE_CREATE",
        })
        .then((audit) => audit.entries.first());
      let author = entry.executor;
      let embed = new MessageEmbed()
        .setAuthor(
          "RoleCreate Logs!!.",
          client.user.avatarURL({ dynamic: true }),
          "https://discord.gg/Qn3z4eyZzW"
        )
        .setColor("DARK_GREY")
        .setDescription(
          `
            > Role Name: ${role.name}
            > Role Id: ${role.id}
            > Role Maker Name: ${author.username}
            > Role Maker Id: ${author.id}
    `
        )
        .setFooter("Logs");
      channelData.send({ embeds: [embed] });
    }
  } catch {
    console.log("");
  }
};

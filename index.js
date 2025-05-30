const express = require("express");
const axios = require("axios");
const app = express();

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1377851622641893416/62jYv8GsLk36qEOo2UqYXrdk-xe1txveNteURqMglV0Xmlm1SdHWU39VfDSU9nOcU3j5";

app.use(express.json());

app.post("/deploy", async (req, res) => {
    const { teamName, leader, teamMembers, link } = req.body;

    if (!teamName || !leader || !Array.isArray(teamMembers)) {
        return res.status(400).send("Invalid payload");
    }

    const embed = {
        title: "Deployment Initiated",
<<<<<<< HEAD
=======
        description: link ? `[Join Deployment](${link})` : undefined,
>>>>>>> 6d64e4a (Add deploy link to webhook payload)
        color: 0,
        fields: [
            { name: "Team", value: teamName, inline: true },
            { name: "Operation Leader", value: leader, inline: true },
            { name: "Team Members", value: teamMembers.join("\n") }
        ],
        timestamp: new Date().toISOString()
    };

    try {
        await axios.post(DISCORD_WEBHOOK, { embeds: [embed] });
        res.status(200).send("Deployment sent.");
    } catch (err) {
        console.error("Failed to send Discord webhook:", err.message);
        res.status(500).send("Failed to send webhook.");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Webhook server running at http://localhost:${PORT}`);
});
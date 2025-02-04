const Email = require("../models/Email");

const storeEmail = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const existingEmail = await Email.findOne({ email });
        if (!existingEmail) {
            const newEmail = new Email({ email });
            await newEmail.save();
        }

        res.status(200).json({ message: "Thank you for submitting your email!" });
    } catch (error) {
        console.error("Error storing email:", error);
        res.status(500).json({ message: "Failed to store email" });
    }
};

const getEmails = async (req, res) => {
    try {
        const emails = await Email.find();
        res.status(200).json(emails);
    } catch (error) {
        console.error("Error fetching emails:", error);
        res.status(500).json({ message: "Failed to fetch emails" });
    }
};

module.exports = { storeEmail, getEmails };

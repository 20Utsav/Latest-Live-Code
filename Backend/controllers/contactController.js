const Contact = require("../models/Contact");

const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, telephone, enquiry } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      telephone,
      enquiry,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getContacts = async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  };

module.exports = { submitContact, getContacts };

const express = require("express");
const { storeEmail, getEmails } = require("../controllers/emailController");

const router = express.Router();

router.post("/store-email", storeEmail);
router.get("/get-emails", getEmails);

module.exports = router;

const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

router.post("/send-email", (req, res) => {
  const { navn, epost, telefon, message } = req.body;
  console.log("Received form data:", req.body); // Debug log

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: `Generelt - Mangfoldpsykologene.no <${process.env.EMAIL_USER}>`,
    to: "joranengelund@hotmail.com",
    subject: "Generelt",
    text: `\n\nNavn: ${navn}\n\nEpost: ${epost}\n\nTelefon: ${telefon}\n\nMelding: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error); // Debug log
      return res.status(500).json({ error: "Error sending email" });
    }
    console.log("Message sent: %s", info.messageId); // Debug log
    res.json({ message: "Email sent successfully" });
  });
});

module.exports = router;

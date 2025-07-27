const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); 

// POST route for adoption
app.post('/adopt', async (req, res) => {
  const { name, email, phone, message } = req.body;

  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS
    },
    tls: {
    rejectUnauthorized: false 
  }
  });

  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: 'New Pet Adoption Request',
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Reason for Adoption: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error sending email' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

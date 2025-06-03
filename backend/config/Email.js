const nodemailer = require("nodemailer");

const sendEmail = async ({to, subject,html}) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent", result.response);
  } catch (error) {
    console.log("Error sending", error);
  }
};

module.exports = sendEmail;

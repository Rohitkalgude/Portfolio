const sendEmail = require("../../config/Email");
const Contect = require("../../Model/Contect");

const createContect = async (req, res) => {
  try {
    const { name, Email, Message } = req.body;

    if (!name || !Email || !Message) {
      return res.status(400).json({ Message: "All required" });
    }

    const newContect = new Contect({ name, Email, Message });
    await newContect.save();

    sendEmail({
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${Email}</p>
          <p><strong>Message:</strong> ${Message}</p>
        `,
    })
      .then(() => {
        console.log("✅ Email sent to admin.");
      })
      .catch((err) => {
        console.error("❌ Email failed:", err.message);
      });

    res
      .status(201)
      .json({ Message: "Contect message add", Contect: newContect });
  } catch (error) {
    console.error("Error", error.Message);
    res.status(500).json({ Message: "internal server error" });
  }
};

module.exports = createContect;

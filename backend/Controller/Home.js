const Home = require("../Model/Home");

const createHome = async (req, res) => {
  try {
    const { description,name,role } = req.body;

    if (!description || !name ||! role) {
      return res.status(400).json({ message: "Descriptiopn are required" });
    }

    const newHome = new Home({ description, name, role });
    await newHome.save();

    res.status(201).json({ message: "Home contect created ", home: newHome });
  } catch (error) {
    console.error("creating home content", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = createHome;

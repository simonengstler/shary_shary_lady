const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authService = require("../services/authService.js");
const userService = require("../services/userService.js");

const registerUser = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await userService.getUserByUsername(username);
  if (existingUser.length > 0) {
    return res.status(400).json({ message: "Username already exists" });
  }

  try {
    await authService.registerUser(username, password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while registering the user" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authService.loginUser(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '12h' });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};

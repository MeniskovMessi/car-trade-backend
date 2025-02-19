const User = require("../models/User"); // Make sure you have a User model

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid username or password" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: "Invalid username or password" });

    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
};

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dbMySQL = require("../config/db_mysql.js");

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const [existingUser] = await dbMySQL.execute("SELECT * FROM users WHERE email=?", [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await dbMySQL.execute("INSERT INTO users (username,email,password_hash) VALUES (?,?,?)", [username, email, hashedPassword]);
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error registering user" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await dbMySQL.execute("SELECT * FROM users WHERE email=?", [email]);
        if (users.length === 0) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        };
        const token = jwt.sign(
            { id: user.id },
            'secret_key_change_me_later',
            { expiresIn: '1h' }
        );
        res.json({ token,
            user: { id: user.id, username: user.username, email: user.email }
        });
    }catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
// src/controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new user
exports.register = async (req, res) => {
    const { university_email, password } = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ university_email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        user = new User({ university_email, password });
        await user.save();

        // Create JWT payload
        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login user
exports.login = async (req, res) => {
    const { university_email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ university_email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create JWT payload
        const payload = { userId: user.id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

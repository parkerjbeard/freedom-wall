// src/models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    university_email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@university\.edu$/, 'Please use a university email address.']
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

// Compare password method
UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);

// src/models/Post.js

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    content_type: {
        type: String,
        enum: ['image', 'pdf', 'audio', 'text'],
        required: true
    },
    content_url: {
        type: String
    },
    text_content: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);

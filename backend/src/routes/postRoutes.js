// src/routes/postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

// Create a new post with file upload
router.post('/', authMiddleware, upload.single('file'), postController.createPost);

// Other post routes...

module.exports = router;

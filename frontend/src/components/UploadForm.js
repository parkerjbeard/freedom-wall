// frontend/src/components/UploadForm.js

import React, { useState } from 'react';
import { createPost } from '../services/postService';

const UploadForm = () => {
    const [contentType, setContentType] = useState('text');
    const [file, setFile] = useState(null);
    const [textContent, setTextContent] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('content_type', contentType);
            formData.append('category_id', category);
            if (file) {
                formData.append('file', file);
            }
            if (textContent) {
                formData.append('text_content', textContent);
            }

            await createPost(formData);
            alert('Post created successfully');
            // Reset form
            setContentType('text');
            setFile(null);
            setTextContent('');
            setCategory('');
        } catch (error) {
            console.error(error);
            alert('Failed to create post');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Post</h2>
            <div>
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content Type:</label>
                <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                >
                    <option value="text">Text</option>
                    <option value="image">Image</option>
                    <option value="pdf">PDF</option>
                    <option value="audio">Audio</option>
                </select>
            </div>
            {contentType !== 'text' && (
                <div>
                    <label>Upload File:</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                    />
                </div>
            )}
            {contentType === 'text' && (
                <div>
                    <label>Text Content:</label>
                    <textarea
                        value={textContent}
                        onChange={(e) => setTextContent(e.target.value)}
                        required
                    />
                </div>
            )}
            <button type="submit">Upload</button>
        </form>
    );
};

export default UploadForm;

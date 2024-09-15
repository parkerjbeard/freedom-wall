// frontend/src/components/PostCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    return (
        <div className="post-card">
            <h3>{post.title}</h3>
            <p>{post.text_content}</p>
            <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
    );
};

export default PostCard;

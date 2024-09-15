// frontend/src/pages/PostDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Post Detail: {id}</h2>
            <p>Details of the post will be displayed here.</p>
        </div>
    );
};

export default PostDetailPage;

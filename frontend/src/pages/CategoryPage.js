// frontend/src/pages/CategoryPage.js

import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Category: {id}</h2>
            <p>Posts under this category will be displayed here.</p>
        </div>
    );
};

export default CategoryPage;

import React from 'react';
import BlogCreate from './BlogCreate';
import './Waaducss.css'

function Food() {
    return (
        <div className="fashion-main w-p-top-4 w-p-bottom-5 bg-indigo-100">
            <div className="food-background"></div>
            <div className="w-m-top-4 w-m-bottom-5">
                <h1 className="display-1 text-center w-purpleblue-gradient w-gradient-text">Food Blogs</h1>
            </div>
            <BlogCreate />

        </div>
    )
}

export default Food
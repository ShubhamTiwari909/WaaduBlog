import React from 'react'
import BlogCreate from './BlogCreate'
import './Waaducss.css'
function Travel() {
    return (
        <div className="fashion-main w-p-top-4 w-p-bottom-5">
            <div className="travel-background"></div>
            <div className="w-m-top-4 w-m-bottom-5">
                <h1 className="display-1 text-center text-dark">Travel Blogs</h1>
                <h3 className="text-center">(Add your blog here)</h3>
            </div>
            <BlogCreate />

        </div>
    )
}

export default Travel
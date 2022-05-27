import React from 'react'
import BlogCreate from './BlogCreate';


function Fashion() {
 
    return (
        <div className="fashion-main">
            <div className="fashion-background"></div>
            <h1 className="display-1 text-center text-dark">Fashion Blogs</h1>
            <h3 className="text-center">(Add your blog here)</h3>
            <BlogCreate />
            
        </div>
    )
}

export default Fashion
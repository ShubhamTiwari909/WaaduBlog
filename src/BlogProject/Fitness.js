import React from 'react'
import BlogCreate from './BlogCreate'
import './Waaducss.css'

function Fitness() {
    return (
        <div className="fashion-main w-p-top-4 w-p-bottom-5 bg-indigo-100">
            <div className="fitness-background"></div>
            <div className="w-m-top-4 w-m-bottom-5">
                <h1 className="display-1 text-center text-dark ">Fitness Blogs</h1>
                <h3 className="text-center">(Add your blog here)</h3>
            </div>
            <BlogCreate />
        </div>
    )
}

export default Fitness
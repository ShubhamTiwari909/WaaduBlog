import React from 'react';

import './blog.css';


function Navbar() {
    return (
        <div>
    

        <div className="header-content">
        <p className="text-center header-content-text" style={{fontSize:"20px",fontFamily: 'Red Hat Display'}}>Ambitions is the first step towards</p>
            <h1 className="text-center success-text">
                SUCCESS
            </h1>
            <div className="text-center">
            <p className="header-content-text" style={{fontSize:"18px",marginTop:"10px",fontWeight:"lighter",fontFamily: 'Red Hat Display'}}>Blogs are now Available Online.</p>
                <button className="btn book-now">Read more...</button>
            </div>
            
        </div>
      
        </div>
    )
}

export default Navbar
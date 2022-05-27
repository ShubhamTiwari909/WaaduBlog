import React from 'react'
import aboutme from './aboutme.jpeg'
import './blog.css';

function AboutMe() {
    return (
        <section id="about-section">
        <div className="Aboutme-main" data-aos="fade-right">
            <div className="Aboutme-content">
                <h2 className="text-center">Shubham Tiwari <span><h3>(Junior Coder)</h3></span></h2>
                
                <h1 className="display-4" style={{textAlign:"center",marginBottom:"2rem"}}>About Me</h1>
                <h3 className="aboutme-text">
                Lorem Ipsum is simply dummy text of 
                the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in
                the 1960s with the release of Letraset sheets containing 
                Lorem Ipsum passages.
                </h3>
                <div className="text-center">
                <button className="btn book-now">Read more...</button>
                </div>
                

            </div>

            <div className="Aboutme-image">
                <img src={aboutme} className="img-fluid aboutme-image" alt="" />
            </div>
        </div>
        </section>
    )
}

export default AboutMe;
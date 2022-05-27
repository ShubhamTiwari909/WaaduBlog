import React from 'react'

function Footer() {
    return (
        <section id="footer_section">
        <div className="Footer">
            

                <div className="left-side">
                   
                        <h2 className="footer-left-heading text-center">Contact</h2>

                        <h5 className="footer-address text-center">2b-2925 , kamal colony , Jv jain road Saharanpur, UttarPradesh, India</h5>
                        <h5 className="footer-phone text-center">Phone: +91 9627253516</h5>

                   <div className="footer-social-sites mt-5">
                        <h5><i className="fa fa-instagram fa-lg mr-3" style={{color:"magenta"}}></i>
                        <i className="fa fa-twitter fa-lg" style={{color:"cyan"}}>
                        <i className="fa fa-linkedin fa-lg ml-3" style={{color:"#386dbd"}}></i>
                        </i>
                        </h5>
                   </div>
                   <h5 className="mt-5">@2021 created by waaduheck</h5>

                </div>

                <div className="right-side">
                    <form className="form">
                        <label>Name</label>
                        <input type="text" className="form-control contact-input"/>

                        <label>Email</label>
                        <input type="text" className="form-control contact-input"/>

                        <label>Subject</label>
                        <input type="text" className="form-control contact-input"/>

                        <label>Message</label>
                        <textarea type="text"  className="form-control contact-input" placeholder="Message" aria-describedby="helpId" />

                        <button className="btn book-now">Submit</button>
                    </form>
                </div>
            </div>
            </section>
       
    )
}

export default Footer
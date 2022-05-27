import React from 'react'
import './blog.css';
function Help() {
    return (
        <div>
            <div class="custom-shape-divider-top-1624609630">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
          </div>
            <div className="Help-main" data-aos="fade-right">
               <div>
                   <h1 className="text-center display-4 Help-text">How can i Help You?</h1>
                </div>

                <div className="Help-cards">
                       <div class="First-card inverted-corners">
                         <div class="card-body">
                           <h2 class="card-title text-center">Online Coaching</h2>
                           <p class="card-text text-center pt-3">Use this area to describe one of your services.</p>
                           <hr />
                           <div className="text-center mt-5">
                                <button className="btn Help-btn">Read more</button>
                           </div>
                         </div>
                       </div>

                       <div class="Second-card inverted-corners">
                         <div class="card-body">
                           <h2 class="card-title text-center">Self confidence Workshop</h2>
                           <p class="card-text text-center pt-3">Use this area to describe one of your services.</p>
                           <hr />
                           <div className="text-center mt-5">
                                <button className="btn Help-btn">Read more</button>
                           </div>
                         </div>
                       </div>

                       <div class="Third-card inverted-corners">
                         <div class="card-body">
                           <h2 class="card-title text-center font-weight-bold">Content Writing</h2>
                           <p class="card-text text-center pt-3">Use this area to describe one of your services.</p>
                           <hr />
                           <div className="text-center mt-5">
                                <button className="btn Help-btn">Read more</button>
                           </div>
                           
                         </div>
                       </div>

                </div>
              
           
            </div>
            
        </div>
    )
}

export default Help
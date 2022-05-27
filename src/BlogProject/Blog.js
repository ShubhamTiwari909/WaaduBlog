import React from 'react'
import Navbar from './navbar';
import AboutMe from './AboutMe';
import Help from './Help';
import Footer from './Footer';
import Fashion from './Fashion';
import Food from './Food';
import Music from './Music';
import Travel from './Travel';
import Sports from './Sports';
import Fitness from './Fitness';

import { Routes, Route, NavLink
} from "react-router-dom";

import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

function Blog() {
    return (
        <div>
       
                <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5 font-weight-bold text-dark fixed-top">
                    <a className="navbar-brand">WaaduBlogs</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <div className="nav-link"><NavLink to="/" style={{ color: 'magenta' }}>Home <span className="sr-only">(current)</span></NavLink></div>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="dropdown-item"><NavLink to="/fashion" style={{ color: 'magenta' }} >Fashion</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/food" style={{ color: 'magenta' }} >Food</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/music" style={{ color: 'magenta' }} >Music</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/travel" style={{ color: 'magenta' }} >Travel</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/sports" style={{ color: 'magenta' }} >Sports</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/fitness" style={{ color: 'magenta' }} >Fitness</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#about-section">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#footer_section ">Contact</a>
                            </li>
                        </ul>
                        <form className="inline my-2 my-lg-0">
                            <li className="nav-link btn btn-outline-primary"><NavLink to="/signup" style={{ color: 'black' }} >Signup</NavLink></li>
                            <li className="nav-link btn btn-outline-primary"><NavLink to="/login" style={{ color: 'black' }} >Login</NavLink></li>
                        </form>
                    </div>
                </nav>
            
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Navbar />
                            <AboutMe />
                            <Help />
                        </div>
                    }>

                    </Route>

                    <Route path="/fashion" element={<Fashion />}>
                        
                    </Route>

                    <Route path="/food" element={<Food />} >
                      
                    </Route>

                    <Route path="/music" element={<Music />}>
                      
                    </Route>

                    <Route path="/travel" element={<Travel />}>
                        
                    </Route>

                    <Route path="/sports" element={<Sports />}>
                      
                    </Route>

                    <Route path="/fitness" element={<Fitness />}>
                       
                    </Route>

                    <Route path="/signup" element={<SignUpPage />}>
                    
                    </Route>

                    <Route path="/login" element={<LoginPage />}>
                        
                    </Route>
                </Routes>

      
            <Footer />
        </div>
    )
}

export default Blog
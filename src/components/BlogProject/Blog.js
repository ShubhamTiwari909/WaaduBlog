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

import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

import {
    BrowserRouter as Router, Routes, Route, NavLink
} from "react-router-dom";



function Blog() {
    return (
        <div>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5 font-weight-bold text-dark fixed-top">
                    <div className="navbar-brand">WaaduBlogs</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <div className="nav-link"><NavLink to="/home" style={{ color: 'magenta' }} target="blank">Home <span className="sr-only">(current)</span></NavLink></div>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle text-dark" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="dropdown-item"><NavLink to="/fashion" style={{ color: 'magenta' }} target="blank">Fashion</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/food" style={{ color: 'magenta' }} target="blank">Food</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/music" style={{ color: 'magenta' }} target="blank">Music</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/travel" style={{ color: 'magenta' }} target="blank">Travel</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/sports" style={{ color: 'magenta' }} target="blank">Sports</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/fitness" style={{ color: 'magenta' }} target="blank">Fitness</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#about-section">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#footer_section ">Contact</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <li className="nav-link"><NavLink to="/signup" style={{ color: 'magenta' }} target="blank">Signup</NavLink></li>
                            <li className="nav-link"><NavLink to="/login" style={{ color: 'magenta' }} target="blank">Login</NavLink></li>
                        </form>
                    </div>
                </nav>
            </Router>

            <Router>
                <Routes>
                    <Route path="/home" element={
                        <div>
                            <Navbar />
                            <AboutMe />
                            <Help />
                        </div>
                    } />

                    <Route path="/fashion" element={<Fashion />} />

                    <Route path="/food" element={<Food />} />
                       

                    <Route path="/music" element={<Music />} />
                       

                    <Route path="/travel" element={<Travel />} />
        

                    <Route path="/sports" element={<Sports /> } />
                       

                    <Route path="/fitness" element={<Fitness /> } />
                    

                    <Route path="/signup" element={<SignUpPage />} />
                       

                    <Route path="/login" element={<LoginPage />} />
                       
                </Routes>

            </Router>
            <Footer />
        </div>
    )
}

export default Blog
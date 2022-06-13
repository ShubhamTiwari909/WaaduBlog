import {useState} from 'react';
import Header from './Header';
import AboutMe from './About';
import Contact from './Contact'
import Help from './CategorySection';
import Footer from './Footer';
import Fashion from './Fashion';
import Food from './Food';
import Music from './Music';
import Travel from './Travel';
import Sports from './Sports';
import Fitness from './Fitness';

import {
    Routes, Route, NavLink
} from "react-router-dom";

import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';

import './Waaducss.css'

function Blog() {
    const [collapseState, setCollapseState] = useState(true);

    const isCollapse = () => {
        if(collapseState){
            setCollapseState(false)
        }
        else{
            setCollapseState(true)
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark w-p-left-5 font-weight-bold fixed-top w-black-gradient w-text-champagne w-p-top-3 w-p-bottom-3 ">
                <div className="navbar-brand">WaaduBlogs</div>
                <button className="navbar-toggler" type="button" onClick={() => setCollapseState(true)} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse ${collapseState ? "navbar-collapse" : ""}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <div className="nav-link w-text-champagne w-text-gradient"><NavLink to="/" onClick={isCollapse}>Home <span className="sr-only">(current)</span></NavLink></div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link dropdown-toggle w-text-champagne" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item"><NavLink to="/fashion" style={{ color: 'magenta' }} onClick={isCollapse} >Fashion</NavLink></li>
                                <li className="dropdown-item"><NavLink to="/food" style={{ color: 'magenta' }} onClick={isCollapse} >Food</NavLink></li>
                                <li className="dropdown-item"><NavLink to="/music" style={{ color: 'magenta' }} onClick={isCollapse} >Music</NavLink></li>
                                <li className="dropdown-item"><NavLink to="/travel" style={{ color: 'magenta' }} onClick={isCollapse} >Travel</NavLink></li>
                                <li className="dropdown-item"><NavLink to="/sports" style={{ color: 'magenta' }} onClick={isCollapse} >Sports</NavLink></li>
                                <li className="dropdown-item"><NavLink to="/fitness" style={{ color: 'magenta' }} onClick={isCollapse} >Fitness</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link w-text-champagne" to="/aboutme" onClick={isCollapse}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link w-text-champagne" to="/contact" onClick={isCollapse}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="w-grid lg-w-grid-cols-2">
                        <div className="w-place-self-start w-m-bottom-2">
                            <div className="w-m-right-2 w-p-left-3 w-p-right-3 w-p-top-1 w-p-bottom-1 w-border-solid w-border-width-1 w-border-palegreen
                            w-border-radius-2 w-text-palegreen w-darkmode-hover w-shadow-medium">
                                <NavLink to="/signup" onClick={isCollapse}>Signup</NavLink>
                            </div>
                        </div>
                        <div className="w-place-self-start">
                            <div className="w-m-right-2 w-p-left-3 w-p-right-3 w-p-top-1 w-p-bottom-1 w-border-solid w-border-width-1 w-border-bluetack
                            w-border-radius-2  w-text-bluetack w-darkmode-hover w-shadow-medium">
                                <NavLink to="/login" onClick={isCollapse}>Login</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={
                    <div>
                        <Header />
                        <Help />
                    </div>
                }>

                </Route>

                <Route path="/aboutme" element={<AboutMe />} />

                <Route path="/contact" element={<Contact />} />

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
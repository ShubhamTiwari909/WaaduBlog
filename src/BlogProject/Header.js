import Travel from './Travel';
import './blog.css';
import {
    Routes, Route, NavLink
} from "react-router-dom";



function Header() {
    return (
        <div>
            <div className="header-content">
                <p className="text-center header-content-text" style={{ fontSize: "20px", fontFamily: 'Red Hat Display' }}>Ambition is the first step towards</p>
                <h1 className="text-center success-text">
                    SUCCESS
                </h1>
                <div className="text-center">
                    <p className="header-content-text" style={{ fontSize: "18px", marginTop: "10px", fontWeight: "lighter", fontFamily: 'Red Hat Display' }}>Blogs are now Available Online.</p>
                    <NavLink to="/travel"><button className="btn book-now">Create Blogs...</button></NavLink>
                </div>
            </div>

            <div>
                <Routes>
                    <Route path="/travel" element={<Travel />} />
                </Routes>
            </div>
        </div>
    )
}

export default Header
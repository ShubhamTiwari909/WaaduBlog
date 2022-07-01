import Travel from './Travel';
import './blog.css';
import {
    Routes, Route, NavLink
} from "react-router-dom";



function Header() {
    return (
        <div>
            <div className="header-content">
                <div className="p-4 my-6 rounded-md bg-gradient-to-r from-slate-800 via-stone-900 to-slate-900 text-slate-300 border-2 border-white
                mx-5 hover:text-slate-800 hover:bg-gradient-to-l hover:from-slate-100 hover:via-stone-200 hover:to-slate-300">
                    <p className="text-center text-xl md:text-3xl lg:text-4xl drop-shadow my-3">Ambition is the first step towards</p>
                    <h1 className="text-center text-2xl md:text-3xl lg:text-4xl drop-shadow-lg ">
                        SUCCESS
                    </h1>
                </div>

                <div className="text-center px-2 py-4 my-3 rounded-md bg-gradient-to-r from-slate-100 via-stone-200 to-slate-300 text-slate-800 border-2 border-slate-800
                mx-10 hover:text-slate-100 hover:bg-gradient-to-l hover:from-slate-800 hover:via-stone-900 hover:to-slate-900">
                    <p className="font-bold">Blogs are now Available Online.</p>
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
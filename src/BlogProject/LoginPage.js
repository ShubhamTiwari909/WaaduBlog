import React from 'react'
import Signup from './SignUpPage';

import {Routes,Route,NavLink} from 'react-router-dom';
function LoginPage() {
    return (
        <div className="my-5">
            <div className="h-screen bg-indigo-100 flex justify-center items-center">
                <form className="w-blue-claymorphism w-full max-w-xs flex flex-col py-5 px-8" action="">
                    <label className="text-gray-700 font-bold py-2" for="">Email</label>
                    <input className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="email" placeholder="Email" />
                    <label className="text-gray-700 font-bold py-2" for="">Password</label>
                    <input className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
                        type="password" placeholder="********" />
                    <div className="grid grid-cols-2 gap-2 justify-between my-4">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-1 px-4">
                            Sign In
                        </button>
                        <div className="text-blue-600 hover:text-blue-800 font-bold">
                            Forgot Password?
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between my-4">
                        <div className="text-slate-600 hover:text-blue-800 font-bold" >
                            Dont have an Account?
                        </div>
                        <div className="place-self-end">
                            <button className="bg-green-500 hover:bg-slate-700 text-white font-bold rounded py-1 px-3">
                                <NavLink to="/signup" className="text-white">Sign Up</NavLink>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    )
}

export default LoginPage
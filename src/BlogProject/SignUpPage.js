import React from 'react'
import Login from './LoginPage'
import { Routes, Route, NavLink } from 'react-router-dom'
function SignUpPage() {
    return (
        <div className="py-20 bg-indigo-100 px-2 mt-10">
            <div className="w-green-claymorphism bg-white max-w-md mx-auto overflow-hidden md:max-w-md">
                <div className="md:flex">
                    <div className="w-full p-3 px-6 py-10">

                        <div className="text-center">
                            <span className="text-xl text-gray-700">Registration Form</span>
                        </div>

                        <div className="mt-3 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">First name</span>
                            <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                        </div>

                        <div className="mt-4 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Last name</span>
                            <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                        </div>


                        <div className="mt-4 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span>
                            <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                        </div>

                        <div className="mt-4 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span>
                            <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button className="h-12 w-1/2 lg:w-1/4 md:1/3 bg-green-600 text-white rounded hover:bg-green-700">Register</button>
                        </div>

                        <div className="mt-10 flex">
                            <div className="mr-4">Already have an account?</div>
                            <button className="h-10 w-1/3 bg-blue-600 text-white rounded hover:bg-blue-700 hover:text-white">
                                <NavLink to="/login" className="text-white">Sign in</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/login" element= {<Login />} />
            </Routes>
        </div>
       
    )
}

export default SignUpPage
import React, { useState, useEffect } from 'react'
import Login from './LoginPage'
import { Routes, Route, NavLink } from 'react-router-dom'
import axios from 'axios';
import './Waaducss.css'

function SignUpPage() {
    const [user, setUser] = useState([])
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registrationState, setRegistrationState] = useState(false);
    const [userAddedMessage, setUserAddedMessage] = useState(false);


    const RegistrationMessage = `${registrationState ? "w-bg-palegreen" : "w-bg-punch"} w-p-top-2 w-p-bottom-2 w-heading-1 w-font-bold w-text-center w-text-champagne`;

    useEffect(() => {
        axios
            .get("http://localhost:3001/Users")
            .then((res) => setUser(res.data))
            .catch((err) => console.log(err));

    }, [user])



    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldeUsername = (e) => {
        setUsername(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };


    //Registration function
    const register = (e) => {
        if (user.find((item) => item.username === username)) {
            setRegistrationState(true);
            setTimeout(() => {
                setRegistrationState(false);
            }, 2000);
        }
        else {
            if (username === "" || email === "" || password === "") {
                alert("Please fill all required fields!!")
            }

            else {
                axios
                    .post("http://localhost:3001/Register", {
                        email: email,
                        username: username,
                        password: password,
                    })
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));

                setUserAddedMessage(true);
                setTimeout(() => {
                    setUserAddedMessage(false);
                }, 2000);
                e.preventDefault();
                window.location.reload();
            }
        }
    }


    return (
        <div className="py-20 bg-indigo-100 px-2 mt-10">

            <div
                style={{ display: userAddedMessage ? "block" : "none" }}
                className="w-green-claymorphism w-text-ink w-text-center text-sm md:text-md lg:text-xl w-m-bottom-5"
            >
                USER ADDED SUCCESSFULLY
            </div>

            {/* User Already Exist component */}
            <div
                style={{ display: registrationState ? "block" : "none" }}
                className="w-red-claymorphism w-text-ink w-text-center text-sm md:text-md lg:text-xl my-4"
            >
                USER ALREADY EXIST
            </div>

            <div className="w-green-claymorphism bg-white max-w-md mx-auto overflow-hidden md:max-w-md">
                <div className="md:flex">
                    <div className="w-full p-3 px-6 py-10">

                        <div className="text-center">
                            <span className="text-xl text-gray-700">Registration Form</span>
                        </div>

                        <div className="mt-3 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">First name</span>
                            <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                                name="name" value={user.name} onChange={hanldeUsername} />
                        </div>

                        {/* <div className="mt-4 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Last name</span>
                            <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600" />
                        </div> */}


                        <div className="mt-4 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span>
                            <input type="text" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                                name="email" value={user.email} onChange={hanldeEmail} />
                        </div>

                        <div className="mt-4 relative">
                            <span className="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Password</span>
                            <input type="password" className="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"
                                name="password" value={user.password} onChange={hanldePassword} />
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button className="h-12 w-1/2 lg:w-1/4 md:1/3 bg-green-600 text-white rounded hover:bg-green-700"
                                onClick={register}>Register</button>
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
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>

    )
}

export default SignUpPage
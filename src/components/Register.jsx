import React from 'react';
import Logo from '/images/Logo.png'
import Footer from './Footer';
import {Link} from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';


const Register = () => {
     const [password, showpassword] = useState(false);
     const Showpasswordhandler = () =>{
        showpassword((prev) => !prev)
     }
     const SubmitHandler = (e) => {
        e.preventDefault()
     }
    return (
        <div className="bg-white">
            <div className="w-full max-w-md absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 mb-4">
                <div className="text-center mb-3">
                    <div className=' flex items-center justify-center gap-2'>
                    <img src={Logo} alt="Musicart Logo" className='w-[3rem]' />
                    <h3 className='text-xl font-bold text-[#2E0052]'>Musicart</h3>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border border-gray-200">
                    <h2 className="text-2xl mb-6 text-center font-medium">Create Account</h2>
                    <form onSubmit={SubmitHandler}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                                Mobile Number
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Mobile Number" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email ID
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email ID" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <div className='shadow appearance-none border rounded w-full flex items-center justify-between px-1'>
                            <input className="p-2 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type={password ? 'text' : 'password' } placeholder="Password" /><button className='px-2' onClick={Showpasswordhandler}>
                                {password ? <FaEye/> : <FaEyeSlash/>}
                            </button>
                            </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-4 text-center">
                            By creating an account, you agree to receive automated security notifications via text message from Musicart. Message and data rates may apply.
                        </p>
                        <div>
                            <button className="bg-[#2E0052] w-full cursor-pointer hover:bg-[#2f0052e4]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
                <div className="text-center flex items-center justify-center gap-2">
                    <p className="text-gray-600">Already have an account?</p>
                    <Link to={'/login'} className="inline-block align-baseline font-bold text-sm text-purple-700 hover:text-purple-800" href="#">
                        Log in
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;

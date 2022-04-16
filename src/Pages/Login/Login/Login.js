import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo2.png'
import Header from '../../Shared/Header/Header'

const Login = () => {
    return (
        <div>
            <Header>{logo}</Header>
            <div className="px-10 md:px-20">
                <form className="w-3/4 md:w-1/3 mx-auto p-8 border-[1px] border-gray-300 rounded">
                    <p className="mb-8 text-lg font-bold">Login</p>
                    <input
                        className="w-full border-b-2 mb-5 pb-1 p-1 text-sm font-semibold outline-none"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username or Email"
                    />
                    <input
                        className="w-full border-b-2 mb-5 pb-1 p-1 text-sm font-semibold outline-none"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    />
                    <div className="flex justify-between">
                        <div>
                            <input type="checkbox" name="" id="" />
                            <label className="ml-2" htmlFor="remember">
                                Remember me?
                            </label>
                        </div>
                        <Link to="/" className="text-[#F9A51A] underline">
                            Forgot password?
                        </Link>
                    </div>
                    <button className="w-full bg-[#F9A51A] py-3 rounded-lg mt-4 mb-3 font-semibold">Login</button>
                    <p>
                        Don't have an account? <span className="text-[#F9A51A] underline">Create an account</span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login

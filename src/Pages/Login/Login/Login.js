import React, { useRef } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'
import logo from '../../../images/logo2.png'
import Header from '../../Shared/Header/Header'
import SocialLogin from '../SocialLogin/SocialLogin'

const Login = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const [signInWithEmailAndPassword, user, , error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }

    const loginHandler = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const pass = passRef.current.value

        signInWithEmailAndPassword(email, pass)
    }

    return (
        <div>
            <Header>{logo}</Header>
            <div className="px-10 md:px-20 my-10">
                <form
                    onSubmit={loginHandler}
                    className="w-3/4 md:w-1/3 mx-auto p-8 border-[1px] border-gray-300 rounded"
                >
                    <p className="mb-8 text-lg font-bold">Login</p>
                    <input
                        ref={emailRef}
                        className="w-full border-b-2 mb-5 pb-1 p-1 text-sm font-semibold outline-none"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username or Email"
                    />
                    <input
                        ref={passRef}
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
                    {error && <p className="text-red-700">{error.message}</p>}
                    <button type="submit" className="w-full bg-[#F9A51A] py-3 rounded-lg mt-4 mb-3 font-semibold">
                        Login
                    </button>
                    <Link to="/signup">
                        Don't have an account? <span className="text-[#F9A51A] underline">Create an account</span>
                    </Link>
                </form>

                <div className="w-3/4 md:w-1/3 mx-auto px-8 my-2 flex items-center">
                    <hr style={{ height: '2px' }} className="w-1/2 bg-gray-300 mr-2" />
                    <p>Or</p>
                    <hr style={{ height: '2px' }} className="w-1/2 bg-gray-300 ml-2" />
                </div>

                <SocialLogin />
            </div>
        </div>
    )
}

export default Login

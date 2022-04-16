import React, { useRef } from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/Firebase.init'
import logo from '../../../images/logo2.png'
import Header from '../../Shared/Header/Header'
import SocialLogin from '../SocialLogin/SocialLogin'

const SignUp = () => {
    const fnameRef = useRef('')
    const lnameRef = useRef('')
    const emailRef = useRef('')
    const passRef = useRef('')
    const conPassRef = useRef('')
    const [createUserWithEmailAndPassword, user, , error] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    })
    const [updateProfile] = useUpdateProfile(auth)
    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }

    let errorElement
    const getError = () => {
        return <p>{errorElement}</p>
    }

    if (error) {
        errorElement = error
    }

    const signupHandler = async e => {
        e.preventDefault()
        const fname = fnameRef.current.value
        const lname = lnameRef.current.value
        const email = emailRef.current.value
        const pass = passRef.current.value
        const conPass = conPassRef.current.value

        if (pass !== conPass) {
            errorElement = "Password didn't match"
            return
        }

        await createUserWithEmailAndPassword(email, pass)
        await updateProfile({
            displayName: fname,
            lname
        })
    }

    return (
        <div>
            <Header>{logo}</Header>
            <div className="px-10 md:px-20 my-10">
                <form
                    onSubmit={signupHandler}
                    className="w-3/4 md:w-1/3 mx-auto p-8 border-[1px] border-gray-300 rounded"
                >
                    <p className="mb-8 text-lg font-bold">Create an account</p>
                    <input
                        ref={fnameRef}
                        className="w-full border-b-2 mb-5 pb-1 p-1 text-sm font-semibold outline-none"
                        type="text"
                        name="fname"
                        placeholder="First Name"
                    />
                    <input
                        ref={lnameRef}
                        className="w-full border-b-2 mb-5 pb-1 p-1 text-sm font-semibold outline-none"
                        type="text"
                        name="lname"
                        placeholder="Last Name"
                    />
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
                    <input
                        ref={conPassRef}
                        className="w-full border-b-2 mb-5 pb-1 p-1 text-sm font-semibold outline-none"
                        type="password"
                        name="confirm-password"
                        id="password"
                        placeholder="Confirm Password"
                    />
                    {getError}
                    <button type="submit" className="w-full bg-[#F9A51A] py-3 rounded-lg mb-3 font-semibold">
                        Create an account
                    </button>
                    <Link to="/login">
                        Already have an account? <span className="text-[#F9A51A] underline">Login</span>
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

export default SignUp

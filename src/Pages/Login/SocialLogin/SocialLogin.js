import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../../Firebase/Firebase.init'
import facebook from '../../../images/icons/fb.png'
import google from '../../../images/icons/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    const navigate = useNavigate()

    if (user) {
        navigate('/')
    }

    return (
        <div className="w-3/4 md:w-1/3 mx-auto px-8 my-2">
            <button className="w-full flex items-center bg-white mb-2 p-1 border-2 border-gray-300 rounded-full outline-none">
                <img width={'37'} src={facebook} alt="Facebook" />
                <span className="ml-11 font-semibold">Continue with Facebook</span>
            </button>
            <button
                onClick={() => signInWithGoogle()}
                className="w-full flex items-center bg-white p-1 border-2 border-gray-300 rounded-full outline-none"
            >
                <img width={'37'} src={google} alt="Google" />
                <span className="ml-11 font-semibold">Continue with Google</span>
            </button>
        </div>
    )
}

export default SocialLogin

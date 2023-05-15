import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    auth,
    signInWithGoogle,
} from '../../api/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import './LoginForm.css'

function Login() {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (error) alert(error)
        if (user) {
          if (user.email === 'ahoy.majo@gmail.com') navigate('/dashboard')  
        }
    }, [user, loading])
    return (
        <div className="login">
            <div className="login__container">
                <button
                    className="login__btn login__google"
                    onClick={signInWithGoogle}
                >
                    Login with Google
                </button>
            </div>
        </div>
    )
}
export default Login

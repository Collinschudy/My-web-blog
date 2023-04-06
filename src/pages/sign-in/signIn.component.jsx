import React from "react";
import { useNavigate } from "react-router-dom";

import './signIn.styles.css';
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../../firebase/firebase.utils";




const SignIn = () => {
    const navigate = useNavigate();
    const signInWithGoogle = async ({setIsAuth}) => {
       
        try {
            await signInWithPopup(auth, provider);
            await setIsAuth(true);
            
             
        }catch (error) {
            (console.log(error.message))
        }
        navigate('/');
    }
    return (
        <div className="signin">
            <div className="signin-wrapper">
                <div className="google-img-container">
                    <img className='google-icon' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='google icon'/>
                </div>

                <span onClick={signInWithGoogle}>
                    Sign in with google
                </span>
            </div>

        </div>
    )
}

export default SignIn;
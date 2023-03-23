import React from "react";

import './signIn.styles.css';
import { signInWithGoogle } from "../../firebase/firebase.utils";


const SignIn = () => {
    return (
        <div className="signin">
            <img className='google-icon' src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' />
            <button onClick={signInWithGoogle}>Sign in with google 
            </button>
        </div>
    )
}

export default SignIn;
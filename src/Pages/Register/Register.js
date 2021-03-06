import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile')
        navigate('/home')
    }
    return (
        <div>
            <div className='register-form'>
                <h2 style={{ textAlign: 'center' }}>Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input type="text" name="name" id="" placeholder='Your name' />
                    <input type="email" name="email" id="" placeholder='Your Email' required />
                    <input type="password" name="password" id="" placeholder='Your Password' required />
                    <input onClick={() => setAgree(!agree)} htmlFor="terms" type="checkbox" name="terms" id="terms" />
                    {/* <label className={agree ? 'ps-2' : 'ps-2 text-danger'} >Accept Genious and car Terms and Condition</label> */}
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} >Accept Genious and car Terms and Condition</label>
                    <input disabled={!agree} className='btn btn-primary w-50 mx-auto mt-2' type="submit" value="Register" />
                </form>
                <p>Already have an account?<Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
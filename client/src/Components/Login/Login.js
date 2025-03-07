import './login.css'
import sign_in from '../../assets/sign_in.svg'
import sign_up from '../../assets/sign_up.svg'
import { FaFacebookF, FaTwitter, FaUser, FaLock, FaGoogle, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Login() {

    const navigate = useNavigate();
    const [error, setError] = useState(false);

    // Toggle Between Login And Signup Form

    const signUp = () => {
        document.querySelector(".container_login").classList.add("sign-up-mode");
        setError(false)
    };


    const signIn = () => {
        document.querySelector(".container_login").classList.remove("sign-up-mode");
    };

    const signupIntitialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    const loginIntitialValues = {
        email: '',
        password: '',
    }

    const [signup, setSignup] = useState(signupIntitialValues)
    const [login, setLogin] = useState(loginIntitialValues)
    const [update, setUpdate] = useState('')


    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    // Sign Up Function

    const signupUser = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signup),
            });
            if (response.ok) {
                setError(false)
                setUpdate('Please wait while we are signing you up')
                const serviceId = 'service_5065rji'
                const templateId = 'template_nlst6zv'
                const publicKey = 'm8eBEU9tkAuFnVAe0'

                const templateParams = {
                    to_name: signup.firstName,
                    to_email: signup.email,
                    from_name: 'Librarium'
                }
                emailjs.send(serviceId, templateId, templateParams, publicKey)
                    .then((resposne) => {
                        console.log('Email sent successfully!', resposne)
                        sessionStorage.setItem('userId', response.token)
                        setError(false);
                        navigate('/home');
                    })
                    .catch((error) => {
                        console.error('Error Sending Email', signup.email, error)
                    })
            } else {
                setError(true);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // Login Function

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            await fetch(`${process.env.REACT_APP_API_URL}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.token) {
                        setError(false);
                        sessionStorage.setItem('userId', data.token)
                        navigate('/home');
                    }
                })
                .catch((error) => {
                    setError(true);
                    console.log(error)
                })
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div class="container_login">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form action="#" class="sign-in-form login">
                            <h2 class="title">Sign in</h2>
                            <div class="input-field">
                                <i> <FaUser /> </i>
                                <input type="text" onChange={(e) => onValueChange(e)} name='email' placeholder="Email" />
                            </div>
                            <div class="input-field">
                                <i> <FaLock /> </i>
                                <input type="password" onChange={(e) => onValueChange(e)} name='password' placeholder="Password" />
                            </div>
                            {error && <p className='error'>Please enter a valid username or password</p>}
                            <input type="submit" onClick={(e) => loginUser(e)} value="Login" class="button solid" />
                        </form>
                        <form action="#" class="sign-up-form login">
                            <h2 class="title">Sign up</h2>
                            <div class="input-field">
                                <i> <FaUser /> </i>
                                <input type="text" onChange={(e) => onInputChange(e)} name='firstName' placeholder="First Name" />
                            </div>
                            <div class="input-field">
                                <i> <FaUser /> </i>
                                <input type="text" onChange={(e) => onInputChange(e)} name='lastName' placeholder="Last Name" />
                            </div>
                            <div class="input-field">
                                <i> <FaEnvelope /> </i>
                                <input type="email" onChange={(e) => onInputChange(e)} name='email' placeholder="Email" />
                            </div>
                            {error && <p className='error'>Email Already In Use</p>}
                            <div class="input-field">
                                <i> <FaLock /> </i>
                                <input type="password" onChange={(e) => onInputChange(e)} name='password' placeholder="Password" />
                            </div>
                            <input type="submit" onClick={(e) => signupUser(e)} class="button" value="Sign up" />
                            <p className='update_info'>{update}</p>
                        </form>
                    </div>
                </div>

                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>
                            <p>
                                Click here to make your profile
                            </p>
                            <button class="button transparent" id="sign-up-btn" onClick={signUp}>
                                Sign up
                            </button>
                        </div>
                        <img src={sign_in} class="image_login" alt="" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                                Click here to login and explore the world full of books
                            </p>
                            <button class="button transparent" id="sign-in-btn" onClick={signIn}>
                                Sign in
                            </button>
                        </div>
                        <img src={sign_up} class="image_login" id='loginimage' alt="" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login;
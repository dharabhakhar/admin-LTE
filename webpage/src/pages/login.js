import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const patt3 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            setEmailError('Enter Your Email');
            return false;
        }
        else if (patt3.test(email) === false) {
            setEmailError('Enter Valid Email');
            return false;
        }
        else if (password === '') {
            setPasswordError('Enter Your Password');
            return false;
        }
        else {
            axios.post('http://localhost:5000/login', {
                email: email,
                password: password
            })
                .then(function (response) {
                    console.log(response.data.token);
                    localStorage.setItem('token', response.data.token);
                    setText(response.data.status);
                    if(response.data.status === "Success"){
                        navigate("/home");
                    }else{
                        navigate("/");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const show = () => {
        if (showPassword) {
            return <i className="text-secondary"><FaEyeSlash /></i>;
        } else {
            return <i className="text-secondary"><FaEye /></i>;;
        }
    };

    return (
        <div>
            <div className="spacer login-form">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="user-box">
                            <input
                                type="text"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={handleEmailChange}
                                size="30px" />
                            <label>Email</label>
                            <span className="error">{emailError}</span>
                            <br />
                            <br />
                        </div>
                        <div className="user-box">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={handlePasswordChange}
                                size="30px" />
                            <i className="eye" onClick={togglePasswordVisibility}>{show()}</i>
                            <label>Password</label>
                            <span className="error">{passwordError}</span>
                            <br />
                            <br />
                        </div>
                        <div className="user_box mb-3">
                            <input
                                type="text"
                                value={text}
                                size="100"
                                className="bg-transparent border-0 text-white" />
                        </div>
                        <input type="submit" className="bt mx-auto d-block fs-5 bg-transparent border-0 text-white" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
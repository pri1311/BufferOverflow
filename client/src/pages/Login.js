import React from "react";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from '../api/axiosConfig'
import { setUserDetails } from "../features/user";
import { useDispatch } from "react-redux";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function onClickLogin(e) {
        api.defaults.headers.post['Content-Type'] = 'application/json';
        e.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        try {
            const response = await api.post('/auth/authenticate', {email: email, password: password});
            const data = response.data
            const token = data.token
            window.localStorage.setItem('auth_token', token);
            api.defaults.headers.post['Authorization'] = `Bearer ${token}`
            const userResponse = await api.post('/users/me')
            const user = userResponse.data
            dispatch(setUserDetails({uid: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email}))
            navigate('/')
        }
        catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.title}>Log in to your account</p>
                <label className={styles.label} for="email">
                👤 Email
                </label>
                <input
                placeholder="Email"
                    className={styles.input}
                    type="email"
                    required={true}
                    name="email"
                    ref={emailRef}
                ></input>
                <label className={styles.label} for="password">
                🔑 Password
                </label>
                <input
                placeholder="Password"
                    className={styles.input}
                    type="password"
                    required={true}
                    name="password"
                    ref={passwordRef}
                ></input>
                <button onClick={e => onClickLogin(e)} className={styles.button}>Login</button>
                <p className={styles.text}>
                    Don't have an account yet? <a onClick={()=> navigate('/register')} href="/register">Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;

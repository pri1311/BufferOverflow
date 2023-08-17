import React from "react";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
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
                ></input>
                <button className={styles.button}>Login</button>
                <p className={styles.text}>
                    Don't have an account yet? <a onClick={()=> navigate('/register')} href="/register">Sign Up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;

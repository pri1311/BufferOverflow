import React from "react";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.containerr}>
                <p className={styles.title}>Create an account</p>
                <label className={styles.label} for="email">
                    First Name
                </label>
                <input
                    placeholder="First Name"
                    className={styles.input}
                    type="text"
                    required={true}
                    name="fname"
                ></input>
                <label className={styles.label} for="email">
                    Last Name
                </label>
                <input
                    placeholder="Last Name"
                    className={styles.input}
                    type="text"
                    required={true}
                    name="lname"
                ></input>
                <label className={styles.label} for="email">
                    Email
                </label>
                <input
                    placeholder="Email"
                    className={styles.input}
                    type="email"
                    required={true}
                    name="email"
                ></input>
                <label className={styles.label} for="password">
                    Password
                </label>
                <input
                    placeholder="Password"
                    className={styles.input}
                    type="password"
                    required={true}
                    name="password"
                ></input>
                <label className={styles.label} for="rpassword">
                    Repeat Password
                </label>
                <input
                    placeholder="Repeat Password"
                    className={styles.input}
                    type="password"
                    required={true}
                    name="password"
                ></input>
                <button className={styles.button}>Register</button>
                <p className={styles.text}>
                    Already have an account? <a onClick={()=> navigate('/login')}  href="/login">Log in</a>
                </p>
            </div>
        </div>
    );
}

export default Register;

import React, { useRef } from "react";
import styles from "../styles/auth.module.css";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";
import { setUserDetails } from "../features/user";
import { useDispatch } from "react-redux";

function Register() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function onClickRegister(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;

        try {
            const response = await api.post("/auth/register", {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            });
            const data = response.data;
            const token = data.token;
            const id = data.uid;
            dispatch(
                setUserDetails({
                    email: email,
                    uid: id,
                    firstName: firstName,
                    lastName: lastName,
                })
            );
            window.localStorage.setItem("auth_token", token);
            navigate("/");
        } catch (e) {
            console.error(e);
        }
    }

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
                    ref={firstNameRef}
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
                    ref={lastNameRef}
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
                    ref={emailRef}
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
                    ref={passwordRef}
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
                <button
                    onClick={(e) => onClickRegister(e)}
                    className={styles.button}
                >
                    Register
                </button>
                <p className={styles.text}>
                    Already have an account?{" "}
                    <a onClick={() => navigate("/login")} href="/login">
                        Log in
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

function NavBar() {
    const location = useLocation();
    const { uid, firstName, lastName } = useSelector(
        (state) => state.user.value
    );

    function closeNavBar() {
        var navIconText = document.getElementById("navIconText");
        var navList = document.getElementById("navList");
        if (navIconText.innerText === "X") navIconText.innerText = "Menu";
        else navIconText.innerText = "X";
        navList.classList.toggle(styles.hideNavBar);
    }

    function closeNavBarMobile() {
        if (window.innerWidth <= 560) {
            closeNavBar();
        }
    }

    function getClassname(isActive) {
        if (isActive) return styles["nav-link"];
        return styles["nav-link"] + " " + styles.unselected;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.navIcon} id="navIcon" onClick={closeNavBar}>
                <p id="navIconText">Menu</p>
            </div>
            <div
                className={styles.navlist + " " + styles.hideNavBar}
                id="navList"
            >
                <NavLink
                    to="/"
                    className={(isActive) => getClassname(isActive)}
                    onClick={closeNavBarMobile}
                >
                    <p className={styles.brand} id="navIconTexFontAwesomeIcont">
                        <FontAwesomeIcon
                            icon={faStackOverflow}
                            className={styles.icon}
                        />
                        BufferOverflow
                    </p>
                </NavLink>
                <div className={styles.lists}>
                    <NavLink
                        to="/questions"
                        className={(isActive) => getClassname(isActive)}
                        onClick={closeNavBarMobile}
                    >
                        Questions
                    </NavLink>
                    <NavLink
                        to="/ask"
                        className={(isActive) => getClassname(isActive)}
                        onClick={closeNavBarMobile}
                    >
                        Ask a Question
                    </NavLink>
                    <NavLink
                        to="/tags"
                        className={(isActive) => getClassname(isActive)}
                        onClick={closeNavBarMobile}
                    >
                        Tags
                    </NavLink>
                    <NavLink
                        to="/users"
                        className={(isActive) => getClassname(isActive)}
                        onClick={closeNavBarMobile}
                    >
                        Users
                    </NavLink>
                    {uid != "" && (
                        <Row className="d-flex flex-row justify-content-center align-items-center">
                            <Col className={styles.userIcon}>
                                {firstName[0]}
                            </Col>{" "}
                            <Col>{firstName} {lastName}</Col>
                        </Row>
                    )}
                    {uid === "" && (
                        <NavLink
                            to={
                                location.pathname == "/register"
                                    ? "/login"
                                    : "/register"
                            }
                            className={(isActive) =>
                                getClassname(isActive) + " " + styles.button
                            }
                            onClick={closeNavBarMobile}
                        >
                            {location.pathname == "/login"
                                ? "Sign Up"
                                : "Login"}
                        </NavLink>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;

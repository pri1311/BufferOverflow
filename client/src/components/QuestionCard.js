import React, { useState } from "react";
import styles from "../styles/questions.module.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

function QuestionCard({ id, title, body, upvotes, date, tags, user }) {
    const navigate = useNavigate();
    const [localUpvotes, setLocalUpvotes] = useState(upvotes);
    async function onUpvote() {
        const token = window.localStorage.getItem("auth_token");
        api.defaults.headers.post["Content-Type"] = "application/json";
        api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        api.defaults.headers.post["Authorization"] = `Bearer ${token}`;
        try {
            const response = await api.post(`/questions/${id}/upvote`);
            setLocalUpvotes(localUpvotes + 1);
        } catch (e) {
            console.error(e);
        }
    }

    async function onDownVote() {
        const token = window.localStorage.getItem("auth_token");
        api.defaults.headers.post["Content-Type"] = "application/json";
        api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        api.defaults.headers.post["Authorization"] = `Bearer ${token}`;
        try {
            const response = await api.post(`/questions/${id}/downvote`);
            setLocalUpvotes(localUpvotes - 1);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className={styles.wrapper}>
            <h1
                onClick={() => {
                    navigate(`/questions/${id}`);
                }}
                style={{ cursor: "pointer" }}
                className="mb-3"
            >
                {title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
            {/* <p>{date}</p> */}

            <Row>
                {tags.map((tag) => (
                    <Col key={tag.id} xs={2} md={1} className={styles.tag}>
                        {tag.name}
                    </Col>
                ))}
            </Row>
            <Row className="justify-content-between align-items-center mt-3">
                <Col xs={6} md={3} className="align-items-center">
                    by {user.firstName} {user.lastName}
                </Col>
                <Col
                    xs={6}
                    md={2}
                    className="d-flex flex-row justify-content-around align-items-center"
                >
                    <FontAwesomeIcon
                        onClick={onUpvote}
                        className={styles.icon}
                        icon={faChevronUp}
                    ></FontAwesomeIcon>
                    <p className={styles.upvotes}>{localUpvotes}</p>
                    <FontAwesomeIcon
                        onClick={onDownVote}
                        className={styles.icon}
                        icon={faChevronDown}
                    ></FontAwesomeIcon>
                </Col>
            </Row>
        </div>
    );
}

export default QuestionCard;

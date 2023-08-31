import React from "react";
import styles from "../styles/questions.module.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function QuestionCard({ title, body, upvotes, date, tags, user }) {
    return (
        <div className={styles.wrapper}>
            <h1 className="mb-3">
                <strong>{title}</strong>
            </h1>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
            {/* <p>{date}</p> */}

            <Row>
                {tags.map((tag) => (
                    <Col xs={2} md={1} className={styles.tag}>
                        {tag.name}
                    </Col>
                ))}
            </Row>
            <Row className="justify-content-between align-items-center mt-3">
                <Col xs={6} md={3} className="align-items-center">
                    by {user.firstName} {user.lastName}
                </Col>
                <Col xs={6} md={2} className="d-flex flex-row justify-content-around align-items-center">
                    <FontAwesomeIcon className={styles.icon} icon={faChevronUp}></FontAwesomeIcon>
                    <p className={styles.upvotes}>{upvotes}</p>
                    <FontAwesomeIcon className={styles.icon}  icon={faChevronDown}></FontAwesomeIcon>
                </Col>
            </Row>
        </div>
    );
}

export default QuestionCard;

import React, { useState } from "react";
import styles from "../styles/answerCard.module.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function AnswerCard({ body, user, publicationDateTime, upvotes }) {
    const [localUpvotes, setLocalUpvotes] = useState(upvotes);
    async function onUpvote() {
        
    }

    async function onDownVote() {

    }

    return (
        <div className={styles.answerCardWrapper}>
            <Row className="justify-content-between m-0 p-0">
                <Col
                    xs={12}
                    md={6}
                    className="d-flex flex-row align-items-center m-0 my-2"
                >
                    <div className={styles.userIcon}>{user.firstName[0]}</div>
                    <p className={styles.user}>
                        by{" "}
                        <span>
                            {user.firstName} {user.lastName}
                        </span>
                    </p>
                    <p className={styles.dateTime}>{publicationDateTime}</p>
                </Col>
                <Col
                    xs={12}
                    md={2}
                    className="d-flex flex-row justify-content-around align-items-center"
                >
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faChevronUp}
                    ></FontAwesomeIcon>
                    <p className={styles.upvotes}>{localUpvotes}</p>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faChevronDown}
                    ></FontAwesomeIcon>
                </Col>
            </Row>
            <div
                className={styles.answerBody}
                dangerouslySetInnerHTML={{ __html: body }}
            ></div>
        </div>
    );
}

export default AnswerCard;

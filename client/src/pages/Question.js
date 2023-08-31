import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosConfig";
import QuestionCard from "../components/QuestionCard";
import QuestionBodyRTE from "../components/QuestionBodyRTE";
import { Container, Col, Row } from "react-bootstrap";
import AnswerCard from "../components/AnswerCard";
import styles from '../styles/question.module.css'

function Question() {
    const params = useParams();
    const [question, setQuestion] = useState();
    const [answers, setAnswers] = useState();
    const [answer, setAnswer] = useState();

    async function getQuestion() {
        const questionResponse = await api.get(`/questions/${params.id}`);
        const question = questionResponse.data;
        const answersResponse = await api.get(
            `/questions/${params.id}/answers`
        );
        const answers = answersResponse.data;
        setQuestion(question);
        setAnswers(answers);
        console.log(answers);
    }

    async function postAnswer() {
        const token = window.localStorage.getItem("auth_token");
        api.defaults.headers.post["Content-Type"] = "application/json";
        api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        api.defaults.headers.post["Authorization"] = `Bearer ${token}`;
        const response = await api.post("/answers/add", {
            body: answer,
            question_id: params.id,
        });
        setAnswer("");
    }

    useEffect(() => {
        getQuestion();
    }, []);

    return (
        <div>
            <Container>
                <Col sm={12} md={8} className="m-auto align-items-start justify-content-start mb-4 p-0">
                    {question && (
                        <QuestionCard
                            title={question.title}
                            body={question.body}
                            upvotes={question.upvotes}
                            date={question.publicationDateTime}
                            tags={question.tags}
                            user={question.user}
                            id={question.id}
                        ></QuestionCard>
                    )}
                    <Row
                        style={{ textAlign: "start" }}
                        className="mt-4 p-3 d-flex flex-column justify-content-start align-items-start"
                    >
                        <h1>Answers</h1>
                        <hr></hr>
                        {answers &&
                            answers.map((answer) => (
                                <AnswerCard
                                    key={answer.id}
                                    body={answer.body}
                                    user={answer.user}
                                    publicationDateTime={answer.publicationDateTime}
                                    upvotes={answer.upvotes}
                                />
                            ))}
                    </Row>
                    <QuestionBodyRTE
                        setBody={setAnswer}
                        body={answer}
                        displayPreview={false}
                    ></QuestionBodyRTE>
                    <Row className="m-0 align-items-start justify-content-start mb-4 p-0">
                      <button className={styles.button} onClick={postAnswer}>Post answer</button>
                    </Row>
                </Col>
            </Container>
        </div>
    );
}

export default Question;

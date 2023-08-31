import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import QuestionCard from "../components/QuestionCard";
import { Col, Container } from "react-bootstrap";

function Questions() {
    var [questions, setQuestions] = useState([]);
    async function getQuestions() {
        const questionsResponse = await api.get("/questions/");
        const questions = questionsResponse.data;
        setQuestions(questions);
        console.log(questions);
    }
    useEffect(() => {
        getQuestions();
    }, []);
    return (
        <div>
            <Container className="p-4 md-p-0">
                <Col sm={12} md="8" className="m-auto align-items-start">
                    <h1 style={{textAlign:"start"}}>Questions</h1>
                    <p style={{textAlign:"start", fontSize:"1.25em"}}>Ask a question and get a quick answer!</p>
                    <hr style={{ width: "100%" }}></hr>
                    {questions.map((question) => (
                        <QuestionCard
                            title={question.title}
                            body={question.body}
                            upvotes={question.upvotes}
                            date={question.publicationDateTime}
                            tags={question.tags}
                            user={question.user}
                        />
                    ))}
                </Col>
            </Container>
        </div>
    );
}

export default Questions;

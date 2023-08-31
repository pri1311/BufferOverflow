import React, { useRef } from "react";
import QuestionBodyRTE from "./QuestionBodyRTE";
import QuestionTagInput from "./QuestionTagInput";
import { useState, useEffect } from "react";
import api from "../api/axiosConfig";
import { Col, Container } from "react-bootstrap";
import styles from "../styles/askQuestion.module.css";

function AskQuestionInput() {
    const [tags, setTags] = useState([]);
    const [body, setBody] = useState("");
    const [selected, setSelected] = useState([]);
    const titleRef = useRef();
    async function getTags() {
        const tagsResponse = await api.get("/tags/");
        const tags = tagsResponse.data;
        const tagsList = tags.map((tag) => tag.name);
        setTags(tagsList);
    }

    async function onPostQuestion() {
        var tags = [];
        for (const tag in selected) {
            tags.push(selected[tag].text);
        }
        const title = titleRef.current.value;
        const token = window.localStorage.getItem("auth_token");
        api.defaults.headers.post["Content-Type"] = "application/json";
        api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        api.defaults.headers.post["Authorization"] = `Bearer ${token}`;
        const response = await api.post("/questions/add", {
            title: title,
            body: body,
            tags: tags,
        });
        titleRef.current.value = "";
        setSelected([]);
        setBody("");
    }

    useEffect(() => {
        getTags();
    }, []);

    return (
        <div className={styles.wrapper}>
            <Container className="d-flex flex-column align-items-center p-4 md-p-0">
                <Col
                    sm={12}
                    md="8"
                    className="d-flex flex-column align-items-start"
                >
                    <h1>Ask a Public Question</h1>
                    <hr style={{ width: "100%" }}></hr>
                    <label for="title">Title</label>
                    <p>Be as specific and detailed as possible!</p>
                    <input
                        ref={titleRef}
                        type="text"
                        id="title"
                        name="title"
                    ></input>

                    <label for="body">Body</label>
                    <p>
                        Include all the information someone would need to answer
                        your Question.
                    </p>
                    <QuestionBodyRTE setBody={setBody} body={body} />
                    <label for="tag">Tags</label>
                    <p>
                        Add upto 3 tags to describe what your question is about.
                    </p>
                    <QuestionTagInput
                        tags={tags}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <button onClick={onPostQuestion} className={styles.button}>
                        Post your Question
                    </button>
                </Col>
            </Container>
        </div>
    );
}

export default AskQuestionInput;

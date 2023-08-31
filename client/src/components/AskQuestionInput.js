import React from "react";
import QuestionBodyRTE from "./QuestionBodyRTE";
import QuestionTagInput from "./QuestionTagInput";
import { useState, useEffect } from "react";
import api from '../api/axiosConfig'
import { Col, Container } from "react-bootstrap";
import styles from '../styles/askQuestion.module.css'

function AskQuestionInput() {
    var [tags, setTags] = useState([]);
    async function getTags() {
        const tagsResponse = await api.get("/tags/");
        const tags = tagsResponse.data;
        const tagsList = tags.map(tag => tag.name)
        setTags(tagsList);
    }
    
    useEffect(() => {
        getTags();
    }, []);
    
    return (
      <div className={styles.wrapper}>
        <Container className="d-flex flex-column align-items-center">
            <Col sm={12} md="8" className="d-flex flex-column align-items-start">
              <h1>Ask a Public Question</h1>
              <hr style={{width:"100%"}}></hr>
              <label for="title">Title</label>
              <p>Be as specific and detailed as possible!</p>
              <input type="text" id="title" name="title"></input>

              <label for="body">Body</label>
              <p>
                  Include all the information someone would need to answer your
                  Question.
              </p>
              <QuestionBodyRTE />
              <label for="tag">Tags</label>
              <p>
                  Add upto 3 tags to describe what your question is about.
              </p>
              <QuestionTagInput tags={tags}/>
              <button className={styles.button}>Post your Question</button>
            </Col>
        </Container></div>
    );
}

export default AskQuestionInput;

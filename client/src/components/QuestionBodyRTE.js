import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/askQuestion.module.css'

function QuestionBodyRTE() {
    var toolbarOptions = [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
        [{ direction: "rtl" }], // text direction

        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],

        ["clean"], // remove formatting button
    ];

    var [body, setBody] = useState('')
    
    function onChangeBody(value) {
        console.log(value);
        setBody(value)
    }
    
    return (
        <Container id="body" className="p-0">
            <ReactQuill
            theme="snow"
            modules={{
                toolbar: toolbarOptions,
                clipboard: {
                    // toggle to add extra line breaks when pasting HTML:
                    matchVisual: false,
                },
            }}
            onChange={onChangeBody}
            className={styles.bodyInput}
        />
        <div className={styles.bodyPreview} dangerouslySetInnerHTML={{ __html: body }}>
        </div>
        </Container>
    );
}

export default QuestionBodyRTE;

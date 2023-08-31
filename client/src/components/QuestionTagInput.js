import React, { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import "../styles/tagsInput.css";
import { Row, Col } from "react-bootstrap";

function QuestionTagInput({ tags, selected, setSelected }) {
    const [message, setMessage] = useState("");
    const suggestions = tags.map((tag) => {
        return {
            id: tag,
            text: tag,
        };
    });
    const KeyCodes = {
        comma: 188,
        enter: 13,
    };
    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    const handleDelete = (i) => {
        setSelected(selected.filter((tag, index) => index !== i));
    };

    const handleAddition = (tag) => {
        if (selected.length == 3) {
            setMessage("Maximum of 3 Tags can be added.");
        } else if (tags.includes(tag.text)) {
            setMessage("");
            setSelected([...selected, tag]);
        } else setMessage("Tag not available. Please select one for the list.");
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = selected.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setSelected(newTags);
    };

    const handleTagClick = (index) => {
        console.log("The tag at index " + index + " was clicked");
    };

    return (
        <div id="tag" className="tags">
            <Row
                style={{ width: "100%" }}
                className="d-flex flex-row p-0"
                fluid
            >
                <ReactTags
                    tags={selected}
                    suggestions={suggestions}
                    delimiters={delimiters}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    handleDrag={handleDrag}
                    handleTagClick={handleTagClick}
                    inputFieldPosition="bottom"
                    allowDeleteFromEmptyInput={false}
                    autocomplete
                />
            </Row>
            <em>{message}</em>
        </div>
    );
}

export default QuestionTagInput;

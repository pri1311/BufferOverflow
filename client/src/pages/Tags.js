import React, { useEffect, useState } from "react";
import api from '../api/axiosConfig'
import TagCard from "../components/TagCard";
import styles from '../styles/tags.module.css'

function Tags() {
    var [tags, setTags] = useState([]);
    async function getTags() {
        const tagsResponse = await api.get('/tags/')
        const tags = tagsResponse.data
        setTags(tags)
    }
    useEffect(()=>{
        getTags()
    }, [])
    return <div className={styles.wrapper}>
        {tags.map(tag => <TagCard key={tag.id} title={tag.name} description={tag.description}/>)}
    </div>;
}

export default Tags;

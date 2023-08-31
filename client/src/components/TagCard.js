import React from 'react'
import styles from '../styles/tags.module.css'

function TagCard({title, description}) {
  return (
    <div className={styles.tagWrapper}>
        <p className={styles.tagTitle}>{title}</p>
        <p className={styles.tagDescription}>{description}</p>
    </div>
  )
}

export default TagCard
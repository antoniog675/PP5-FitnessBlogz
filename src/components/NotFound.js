import NoResults from "../assets/no-results.jpg"
import Asset from "./Asset.js"
import styles from '../styles/NotFound.module.css'
import React from 'react'

const NotFound = () => {
  return (
        <div className={styles.Image}>
            <Asset src={NoResults} />
            <p>Sorry, the page you're looking for doesn't exist</p>
        </div>
  )
}

export default NotFound
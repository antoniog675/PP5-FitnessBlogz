import NoResults from "../assets/no-results.jpg"
import Asset from "./Asset.js"
import styles from '../styles/NotFound.module.css'
import React from 'react'

// This file redirects user to a page not found when an incorrect or unrecognised url has been put in

const NotFound = () => {
  return (
        <div className={styles.Image}>
            <Asset src={NoResults} />
            <p>Sorry, the page you're looking for doesn't exist</p>
        </div>
  )
}

export default NotFound
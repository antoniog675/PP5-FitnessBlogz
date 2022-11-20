import React from 'react'
import styles from '../styles/Avatar.module.css'

// Hear I have created the round image for the users profile image with some css

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span>
      <img className={styles.Avatar} src={src} height={height} width={height} alt="avatar" />
      {text}
    </span>
  )
}

export default Avatar
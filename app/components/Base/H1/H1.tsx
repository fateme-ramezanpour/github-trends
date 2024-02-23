import React from 'react'
import styles from './H1.module.css'

interface H1Type {
  children: React.ReactNode,
}

const H1 = ({children}: H1Type) => {
  return (
    <h1 className={styles.heading}>
      {children}
    </h1>
  )
}

export default H1
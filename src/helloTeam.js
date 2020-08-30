import React from 'react'
import { Link } from 'react-router-dom'
import styles from './css/App.module.css';


const helloTeam = () => {
    return (
        <div>
            <h1>Hello Team</h1>
            <button className={styles.back}><Link to="/">Back</Link></button>
        </div>
    )
}

export default helloTeam

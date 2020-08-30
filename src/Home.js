import React from 'react'
import styles from './css/App.module.css';
import help from './help.svg'
import notification from './notification.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.main}>
            <div className={styles.item1}><Link to="/redirect">QUOTATION</Link></div>
            <div className={styles.item2}><Link to="/redirect">REVENUE</Link></div>
            <div className={styles.item3}><Link to="/redirect">SALES REPORT</Link></div>
            <div className={styles.item4}><Link to="/redirect">SERVICES SOLD</Link></div>
            <div className={styles.item5}><Link to="/redirect">RECENT ACTIVITY</Link></div>
            <div className={styles.item6}><Link to="/redirect">LATEST MESSAGES</Link></div>
            <div className={styles.item7}><Link to="/redirect">SOCIAL SOURCE</Link></div>
        </div>

    )
}

export default Home

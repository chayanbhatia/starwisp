import React from 'react';
import { redirect, useHistory } from 'react-router-dom'
import styles from './css/App.module.css';
import help from './help.svg'
import notification from './notification.svg'
function App() {

  let history = useHistory()
  const handleClick = () => {
    console.log(history)
  }
  return (
    <div className="App">
      <div className={styles['header']}>
        <div><h1>LOGO</h1></div>
        <div>
          <img src={help} alt="" />
          <img src={notification} alt="" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.sidebar}>
          <p>DASHBOARD</p>
          <p>UNIVERSITY</p>
          <p>SYSTEM</p>
        </div>
        <div className={styles.main}>
          <div onClick={handleClick} className={styles.item1}>QUOTATION</div>
          <div className={styles.item2}>REVENUE</div>
          <div className={styles.item3}>SALES REPORT</div>
          <div className={styles.item4}>SERVICES SOLD</div>
          <div className={styles.item5}>RECENT ACTIVITY</div>
          <div className={styles.item6}>LATEST MESSAGES</div>
          <div className={styles.item7}>SOCIAL SOURCE</div>
        </div>
      </div>
    </div>
  );
}

export default App;

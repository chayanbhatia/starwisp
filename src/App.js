import React from 'react';
import styles from './css/App.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Redirect from './helloTeam'
import Home from './Home'
import help from './help.svg'
import notification from './notification.svg'

function App() {


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
        <Switch>
          <Route path='/redirect' component={Redirect} exact />
          <Route path='/' component={Home} exact />
        </Switch>
      </div>


    </div>
  );
}

export default App;

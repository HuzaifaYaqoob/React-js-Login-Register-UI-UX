import logo from './logo.svg';

import React from 'react'

import { Switch , Route } from 'react-router-dom'

// COMPONENTS 

import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import HomePage from './components/Homepage/HomePage'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Nav from './components/Homepage/Nav';
import Calculator from './components/Homepage/Calculator';
import BMIcalc from './components/Fitness/BMI/Calc';
import BMRcalc from './components/Fitness/BMR/Calc';
import OneRepMax from './components/Fitness/1RM/Calc';
import VO2calc from './components/Fitness/VO2/Calc';
import './reset.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalculator, faDumbbell, faUser, faHeartbeat, faWeight, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCalculator, faDumbbell, faUser, faHeartbeat, faWeight, faSignInAlt, faSignOutAlt)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <FontAwesomeIcon icon='bars' />
            <Nav />
          </header>
          <Route exact path='/' component={Home} />
          <Route exact path='/calculator' component={Calculator} />
          <Route exact path='/calculator/bmi' component={BMIcalc} />
          <Route exact path='/calculator/bmr' component={BMRcalc} />
          <Route exact path='/calculator/one-rep-max' component={OneRepMax} />
          <Route exact path='/calculator/VO2-max' component={VO2calc} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Nav from './components/Homepage/Nav';
import BMIcalc from './components/Fitness/BMI/Calc';
import BMRcalc from './components/Fitness/BMR/Calc';
import OneRepMax from './components/Fitness/1RM/Calc';
import VO2calc from './components/Fitness/VO2/Calc';
import TargetHeartRate from './components/Fitness/THR/Calc';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCalculator, faDumbbell, faUser, faHeartbeat, faWeight, faSignInAlt, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faCalculator, faDumbbell, faUser, faHeartbeat, faWeight, faSignInAlt, faSignOutAlt, faTimes)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <FontAwesomeIcon icon='bars' onClick={(event) => {
              if (event.target.nodeName === 'svg') event.target.parentNode.childNodes[1].hidden = !event.target.parentNode.childNodes[1].hidden;
              else if (event.target.nodeName === 'path') event.target.parentNode.parentNode.childNodes[1].hidden = !event.target.parentNode.parentNode.childNodes[1].hidden;
            }}/>
            <Nav />
          </header>
          <Route exact path='/' component={Home} />
          <Route exact path='/bmi' component={BMIcalc} />
          <Route exact path='/bmr' component={BMRcalc} />
          <Route exact path='/one-rep-max' component={OneRepMax} />
          <Route exact path='/VO2-max' component={VO2calc} />
          <Route exact path='/target-hr' component={TargetHeartRate} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

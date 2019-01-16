import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomepageLayout } from './components/Homepage/Header';
import BMIcalc from './components/Fitness/BMI/Calc';
import BMRcalc from './components/Fitness/BMR/Calc';
import OneRepMax from './components/Fitness/1RM/Calc';
import VO2calc from './components/Fitness/VO2/Calc';
import TargetHeartRate from './components/Fitness/THR/Calc';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import Welcome from './components/Welcome/Welcome'
import Home from './components/Homepage/Home'

library.add(faDumbbell)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomepageLayout>
          <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/bmi' component={BMIcalc} />
          <Route exact path='/bmr' component={BMRcalc} />
          <Route exact path='/one-rep-max' component={OneRepMax} />
          <Route exact path='/VO2-max' component={VO2calc} />
          <Route exact path='/target-hr' component={TargetHeartRate} />
          </Switch>
        </HomepageLayout>
      </BrowserRouter>
    );
  }
}

export default App;

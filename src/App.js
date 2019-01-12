import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomepageLayout from './components/Homepage/Home';
import BMIcalc from './components/Fitness/BMI/Calc';
import BMRcalc from './components/Fitness/BMR/Calc';
import OneRepMax from './components/Fitness/1RM/Calc';
import VO2calc from './components/Fitness/VO2/Calc';
import TargetHeartRate from './components/Fitness/THR/Calc';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={HomepageLayout} />
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

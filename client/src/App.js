import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomepageLayout, HomepageHeading } from './components/Homepage/Header';
import BMIcalc from './components/Fitness/BMI/Calc';
import BMRcalc from './components/Fitness/BMR/Calc';
// import OneRepMax from './components/Fitness/1RM/Calc';
// import VO2calc from './components/Fitness/VO2/Calc';
// import TargetHeartRate from './components/Fitness/THR/Calc';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDumbbell, faSmile, faFrown } from '@fortawesome/free-solid-svg-icons'
// import Welcome from './components/Welcome/Welcome'
// import Home from './components/Homepage/Home'

library.add(faDumbbell, faSmile, faFrown)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <HomepageLayout>
          <Switch>
          {/* <Route exact path='/' component={Welcome} /> */}
          <Route exact path='/home' component={HomepageHeading} />
          <Route exact path='/bmi' component={BMIcalc} />
          <Route exact path='/bmr' component={BMRcalc} />
          </Switch>
        </HomepageLayout>
      </BrowserRouter>
    );
  }
}

export default App;
